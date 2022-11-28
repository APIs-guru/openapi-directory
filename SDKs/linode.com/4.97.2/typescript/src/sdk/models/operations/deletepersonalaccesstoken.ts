import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeletePersonalAccessTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tokenId" })
  tokenId: number;
}


export class DeletePersonalAccessTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeletePersonalAccessTokenDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeletePersonalAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePersonalAccessTokenPathParams;

  @SpeakeasyMetadata()
  security: DeletePersonalAccessTokenSecurity;
}


export class DeletePersonalAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deletePersonalAccessToken200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deletePersonalAccessTokenDefaultApplicationJsonObject?: DeletePersonalAccessTokenDefaultApplicationJson;
}
