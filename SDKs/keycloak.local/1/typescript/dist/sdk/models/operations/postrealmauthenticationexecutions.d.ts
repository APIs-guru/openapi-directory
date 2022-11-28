import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmAuthenticationExecutionsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PostRealmAuthenticationExecutionsRequest extends SpeakeasyBase {
    pathParams: PostRealmAuthenticationExecutionsPathParams;
    request: shared.AuthenticationExecutionRepresentation;
}
export declare class PostRealmAuthenticationExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
