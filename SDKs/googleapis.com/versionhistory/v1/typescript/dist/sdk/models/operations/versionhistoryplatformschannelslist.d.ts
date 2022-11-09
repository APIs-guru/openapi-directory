import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VersionhistoryPlatformsChannelsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VersionhistoryPlatformsChannelsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VersionhistoryPlatformsChannelsListRequest extends SpeakeasyBase {
    pathParams: VersionhistoryPlatformsChannelsListPathParams;
    queryParams: VersionhistoryPlatformsChannelsListQueryParams;
}
export declare class VersionhistoryPlatformsChannelsListResponse extends SpeakeasyBase {
    contentType: string;
    listChannelsResponse?: shared.ListChannelsResponse;
    statusCode: number;
}
