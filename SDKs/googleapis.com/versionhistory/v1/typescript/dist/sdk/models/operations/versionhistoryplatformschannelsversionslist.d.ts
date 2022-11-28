import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VersionhistoryPlatformsChannelsVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VersionhistoryPlatformsChannelsVersionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VersionhistoryPlatformsChannelsVersionsListRequest extends SpeakeasyBase {
    pathParams: VersionhistoryPlatformsChannelsVersionsListPathParams;
    queryParams: VersionhistoryPlatformsChannelsVersionsListQueryParams;
}
export declare class VersionhistoryPlatformsChannelsVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    listVersionsResponse?: shared.ListVersionsResponse;
    statusCode: number;
}
