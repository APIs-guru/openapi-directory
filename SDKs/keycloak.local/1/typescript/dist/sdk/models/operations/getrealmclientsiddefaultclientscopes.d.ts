import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdDefaultClientScopesPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdDefaultClientScopesRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdDefaultClientScopesPathParams;
}
export declare class GetRealmClientsIdDefaultClientScopesResponse extends SpeakeasyBase {
    clientScopeRepresentations?: shared.ClientScopeRepresentation[];
    contentType: string;
    statusCode: number;
}
