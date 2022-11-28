import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateInitialConfigurationRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  startupConfigurationDto?: shared.StartupConfigurationDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  startupConfigurationDto1?: shared.StartupConfigurationDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  startupConfigurationDto2?: shared.StartupConfigurationDto;
}


export class UpdateInitialConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateInitialConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: UpdateInitialConfigurationRequests;

  @SpeakeasyMetadata()
  security: UpdateInitialConfigurationSecurity;
}


export class UpdateInitialConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
