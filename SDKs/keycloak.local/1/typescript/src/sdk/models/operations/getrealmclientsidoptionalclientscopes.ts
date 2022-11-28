import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmClientsIdOptionalClientScopesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdOptionalClientScopesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmClientsIdOptionalClientScopesPathParams;
}


export class GetRealmClientsIdOptionalClientScopesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ClientScopeRepresentation })
  clientScopeRepresentations?: shared.ClientScopeRepresentation[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
