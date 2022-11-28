import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAppsAppIdPublishPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class PostAppsAppIdPublishQueryParams extends SpeakeasyBase {
    autoApprove?: boolean;
    developerId: string;
    version: number;
}
export declare class PostAppsAppIdPublishRequest extends SpeakeasyBase {
    pathParams: PostAppsAppIdPublishPathParams;
    queryParams: PostAppsAppIdPublishQueryParams;
}
export declare class PostAppsAppIdPublishResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
