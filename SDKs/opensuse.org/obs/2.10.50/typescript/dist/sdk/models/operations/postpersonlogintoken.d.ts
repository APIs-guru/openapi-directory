import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostPersonLoginTokenPathParams extends SpeakeasyBase {
    login: string;
}
export declare enum PostPersonLoginTokenOperationEnum {
    Runservice = "runservice",
    Rebuild = "rebuild",
    Release = "release"
}
export declare class PostPersonLoginTokenQueryParams extends SpeakeasyBase {
    operation?: PostPersonLoginTokenOperationEnum;
    package?: string;
    project?: string;
    scmToken?: string;
}
export declare class PostPersonLoginTokenSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PostPersonLoginTokenRequest extends SpeakeasyBase {
    pathParams: PostPersonLoginTokenPathParams;
    queryParams: PostPersonLoginTokenQueryParams;
    security: PostPersonLoginTokenSecurity;
}
export declare class PostPersonLoginTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
