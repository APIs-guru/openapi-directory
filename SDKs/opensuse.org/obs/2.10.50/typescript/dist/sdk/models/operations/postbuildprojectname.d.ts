import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostBuildProjectNamePathParams extends SpeakeasyBase {
    projectName: string;
}
export declare enum PostBuildProjectNameCmdEnum {
    Wipe = "wipe",
    Restartbuild = "restartbuild",
    Killbuild = "killbuild",
    Abortbuild = "abortbuild",
    Rebuild = "rebuild",
    Unpublish = "unpublish",
    Sendsysrq = "sendsysrq"
}
export declare class PostBuildProjectNameQueryParams extends SpeakeasyBase {
    arch?: string;
    cmd: PostBuildProjectNameCmdEnum;
    package?: string;
    repository?: string;
}
export declare class PostBuildProjectNameSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PostBuildProjectNameRequest extends SpeakeasyBase {
    pathParams: PostBuildProjectNamePathParams;
    queryParams: PostBuildProjectNameQueryParams;
    security: PostBuildProjectNameSecurity;
}
export declare class PostBuildProjectNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
