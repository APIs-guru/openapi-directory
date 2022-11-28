import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmDefaultDefaultClientScopesPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmDefaultDefaultClientScopesRequest extends SpeakeasyBase {
    pathParams: GetRealmDefaultDefaultClientScopesPathParams;
}
export declare class GetRealmDefaultDefaultClientScopesResponse extends SpeakeasyBase {
    clientScopeRepresentations?: shared.ClientScopeRepresentation[];
    contentType: string;
    statusCode: number;
}
