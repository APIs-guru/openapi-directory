import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateConfigurationRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  serverConfiguration?: shared.ServerConfigurationInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  serverConfiguration1?: shared.ServerConfigurationInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  serverConfiguration2?: shared.ServerConfigurationInput;
}


export class UpdateConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: UpdateConfigurationRequestsInput;

  @SpeakeasyMetadata()
  security: UpdateConfigurationSecurity;
}


export class UpdateConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
