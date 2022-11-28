import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStartupConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetStartupConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetStartupConfigurationSecurity;
}


export class GetStartupConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  startupConfigurationDto?: shared.StartupConfigurationDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
