import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteProfileAppPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class DeleteProfileAppSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteProfileAppDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteProfileAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProfileAppPathParams;

  @SpeakeasyMetadata()
  security: DeleteProfileAppSecurity;
}


export class DeleteProfileAppResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteProfileApp200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteProfileAppDefaultApplicationJsonObject?: DeleteProfileAppDefaultApplicationJson;
}
