import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetConfigurationSecurity;
}


export class GetConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverConfiguration?: shared.ServerConfiguration;

  @SpeakeasyMetadata()
  statusCode: number;
}
