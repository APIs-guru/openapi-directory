import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmAuthenticationExecutionsExecutionIdConfigPathParams extends SpeakeasyBase {
    executionId: string;
    realm: string;
}
export declare class PostRealmAuthenticationExecutionsExecutionIdConfigRequest extends SpeakeasyBase {
    pathParams: PostRealmAuthenticationExecutionsExecutionIdConfigPathParams;
    request: shared.AuthenticatorConfigRepresentation;
}
export declare class PostRealmAuthenticationExecutionsExecutionIdConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
