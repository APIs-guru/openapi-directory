import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdOptionalClientScopesPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdOptionalClientScopesRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdOptionalClientScopesPathParams;
}
export declare class GetRealmClientsIdOptionalClientScopesResponse extends SpeakeasyBase {
    clientScopeRepresentations?: shared.ClientScopeRepresentation[];
    contentType: string;
    statusCode: number;
}
