import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAppsAppIdLivePathParams extends SpeakeasyBase {
    appId: string;
}
export declare class PostAppsAppIdLiveQueryParams extends SpeakeasyBase {
    developerId: string;
    version: string;
}
export declare class PostAppsAppIdLiveRequest extends SpeakeasyBase {
    pathParams: PostAppsAppIdLivePathParams;
    queryParams: PostAppsAppIdLiveQueryParams;
}
export declare class PostAppsAppIdLiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
