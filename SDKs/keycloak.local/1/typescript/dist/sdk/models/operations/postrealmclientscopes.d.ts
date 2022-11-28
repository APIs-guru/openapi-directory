import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientScopesPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PostRealmClientScopesRequest extends SpeakeasyBase {
    pathParams: PostRealmClientScopesPathParams;
    request: shared.ClientScopeRepresentation;
}
export declare class PostRealmClientScopesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
