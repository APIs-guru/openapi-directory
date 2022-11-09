import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmDefaultDefaultClientScopesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmDefaultDefaultClientScopesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmDefaultDefaultClientScopesPathParams;
}


export class GetRealmDefaultDefaultClientScopesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ClientScopeRepresentation })
  clientScopeRepresentations?: shared.ClientScopeRepresentation[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
