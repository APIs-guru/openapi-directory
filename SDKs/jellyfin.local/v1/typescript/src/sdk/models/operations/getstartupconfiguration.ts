import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStartupConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetStartupConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  security: GetStartupConfigurationSecurity;
}


export class GetStartupConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  startupConfigurationDto?: shared.StartupConfigurationDto;

  @Metadata()
  statusCode: number;
}
