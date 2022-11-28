import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmDefaultOptionalClientScopesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmDefaultOptionalClientScopesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmDefaultOptionalClientScopesPathParams;
}


export class GetRealmDefaultOptionalClientScopesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ClientScopeRepresentation })
  clientScopeRepresentations?: shared.ClientScopeRepresentation[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
