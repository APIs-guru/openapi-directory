import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateConfigurationRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  serverConfiguration?: shared.ServerConfiguration;

  @Metadata({ data: "request, media_type=application/json" })
  serverConfiguration1?: shared.ServerConfiguration;

  @Metadata({ data: "request, media_type=text/json" })
  serverConfiguration2?: shared.ServerConfiguration;
}


export class UpdateConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  request: UpdateConfigurationRequests;

  @Metadata()
  security: UpdateConfigurationSecurity;
}


export class UpdateConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
