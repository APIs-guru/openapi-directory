import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmDefaultDefaultClientScopesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmDefaultDefaultClientScopesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmDefaultDefaultClientScopesPathParams;
}


export class GetRealmDefaultDefaultClientScopesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ClientScopeRepresentation })
  clientScopeRepresentations?: shared.ClientScopeRepresentation[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
