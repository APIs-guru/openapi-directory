import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateUserConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UpdateUserConfigurationRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  userConfiguration?: shared.UserConfiguration;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  userConfiguration1?: shared.UserConfiguration;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  userConfiguration2?: shared.UserConfiguration;
}


export class UpdateUserConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateUserConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateUserConfigurationPathParams;

  @SpeakeasyMetadata()
  request: UpdateUserConfigurationRequests;

  @SpeakeasyMetadata()
  security: UpdateUserConfigurationSecurity;
}


export class UpdateUserConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
