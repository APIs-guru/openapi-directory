import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRealmClientScopesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmClientScopesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmClientScopesIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ClientScopeRepresentation;
}


export class PutRealmClientScopesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
