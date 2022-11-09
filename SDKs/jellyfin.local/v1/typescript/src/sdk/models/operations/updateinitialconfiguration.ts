import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateInitialConfigurationRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  startupConfigurationDto?: shared.StartupConfigurationDto;

  @Metadata({ data: "request, media_type=application/json" })
  startupConfigurationDto1?: shared.StartupConfigurationDto;

  @Metadata({ data: "request, media_type=text/json" })
  startupConfigurationDto2?: shared.StartupConfigurationDto;
}


export class UpdateInitialConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateInitialConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  request: UpdateInitialConfigurationRequests;

  @Metadata()
  security: UpdateInitialConfigurationSecurity;
}


export class UpdateInitialConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
