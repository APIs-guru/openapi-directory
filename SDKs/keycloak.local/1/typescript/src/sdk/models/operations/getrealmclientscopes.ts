import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientScopesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientScopesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientScopesPathParams;
}


export class GetRealmClientScopesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ClientScopeRepresentation })
  clientScopeRepresentations?: shared.ClientScopeRepresentation[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
