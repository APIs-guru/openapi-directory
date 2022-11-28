import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProfileAppPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class GetProfileAppSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetProfileAppDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetProfileAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProfileAppPathParams;

  @SpeakeasyMetadata()
  security: GetProfileAppSecurity;
}


export class GetProfileAppResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authorizedApp?: shared.AuthorizedApp;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProfileAppDefaultApplicationJsonObject?: GetProfileAppDefaultApplicationJson;
}
