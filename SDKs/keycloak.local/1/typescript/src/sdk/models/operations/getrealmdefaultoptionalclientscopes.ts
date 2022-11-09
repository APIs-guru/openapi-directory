import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmDefaultOptionalClientScopesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmDefaultOptionalClientScopesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmDefaultOptionalClientScopesPathParams;
}


export class GetRealmDefaultOptionalClientScopesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ClientScopeRepresentation })
  clientScopeRepresentations?: shared.ClientScopeRepresentation[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
