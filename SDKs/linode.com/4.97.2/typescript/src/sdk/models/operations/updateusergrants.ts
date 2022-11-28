import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateUserGrantsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class UpdateUserGrantsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateUserGrantsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateUserGrantsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateUserGrantsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GrantsResponseInput;

  @SpeakeasyMetadata()
  security: UpdateUserGrantsSecurity;
}


export class UpdateUserGrantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  grantsResponse?: shared.GrantsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateUserGrantsDefaultApplicationJsonObject?: UpdateUserGrantsDefaultApplicationJson;
}
