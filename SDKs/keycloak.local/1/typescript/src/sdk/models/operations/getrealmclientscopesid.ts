import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmClientScopesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientScopesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmClientScopesIdPathParams;
}


export class GetRealmClientScopesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientScopeRepresentation?: shared.ClientScopeRepresentation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
