import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostAppsAppIdVersionsVersionStatusPathParams extends SpeakeasyBase {
    appId: string;
    version: number;
}
export declare enum PostAppsAppIdVersionsVersionStatusModifiedByEnum {
    Developer = "developer",
    Administrator = "administrator"
}
export declare enum PostAppsAppIdVersionsVersionStatusStatusEnum {
    InReview = "inReview",
    Approved = "approved",
    Suspended = "suspended",
    Rejected = "rejected"
}
export declare class PostAppsAppIdVersionsVersionStatusQueryParams extends SpeakeasyBase {
    developerId?: string;
    modifiedBy?: PostAppsAppIdVersionsVersionStatusModifiedByEnum;
    reason?: string;
    status?: PostAppsAppIdVersionsVersionStatusStatusEnum;
}
export declare class PostAppsAppIdVersionsVersionStatusRequest extends SpeakeasyBase {
    pathParams: PostAppsAppIdVersionsVersionStatusPathParams;
    queryParams: PostAppsAppIdVersionsVersionStatusQueryParams;
}
export declare class PostAppsAppIdVersionsVersionStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
