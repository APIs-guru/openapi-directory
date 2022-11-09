import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateUserConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UpdateUserConfigurationRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  userConfiguration?: shared.UserConfiguration;

  @Metadata({ data: "request, media_type=application/json" })
  userConfiguration1?: shared.UserConfiguration;

  @Metadata({ data: "request, media_type=text/json" })
  userConfiguration2?: shared.UserConfiguration;
}


export class UpdateUserConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateUserConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateUserConfigurationPathParams;

  @Metadata()
  request: UpdateUserConfigurationRequests;

  @Metadata()
  security: UpdateUserConfigurationSecurity;
}


export class UpdateUserConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
