import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  security: GetConfigurationSecurity;
}


export class GetConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serverConfiguration?: shared.ServerConfiguration;

  @Metadata()
  statusCode: number;
}
