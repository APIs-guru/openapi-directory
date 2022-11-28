import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmAuthenticationFlowsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PostRealmAuthenticationFlowsRequest extends SpeakeasyBase {
    pathParams: PostRealmAuthenticationFlowsPathParams;
    request: shared.AuthenticationFlowRepresentation;
}
export declare class PostRealmAuthenticationFlowsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
