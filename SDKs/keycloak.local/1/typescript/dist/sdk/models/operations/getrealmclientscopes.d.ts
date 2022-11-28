import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientScopesPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmClientScopesRequest extends SpeakeasyBase {
    pathParams: GetRealmClientScopesPathParams;
}
export declare class GetRealmClientScopesResponse extends SpeakeasyBase {
    clientScopeRepresentations?: shared.ClientScopeRepresentation[];
    contentType: string;
    statusCode: number;
}
