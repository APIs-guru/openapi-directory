import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PostRequestAddrevisionEnum {
    One = "1"
}
export declare enum PostRequestCmdEnum {
    Create = "create"
}
export declare enum PostRequestIgnoreBuildStateEnum {
    One = "1"
}
export declare enum PostRequestIgnoreDelegateEnum {
    One = "1"
}
export declare class PostRequestQueryParams extends SpeakeasyBase {
    addrevision?: PostRequestAddrevisionEnum;
    cmd: PostRequestCmdEnum;
    ignoreBuildState?: PostRequestIgnoreBuildStateEnum;
    ignoreDelegate?: PostRequestIgnoreDelegateEnum;
}
export declare class PostRequestSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PostRequestRequest extends SpeakeasyBase {
    queryParams: PostRequestQueryParams;
    request: Uint8Array;
    security: PostRequestSecurity;
}
export declare class PostRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
