import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VersionhistoryPlatformsChannelsVersionsReleasesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VersionhistoryPlatformsChannelsVersionsReleasesListQueryParams extends SpeakeasyBase {
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
export declare class VersionhistoryPlatformsChannelsVersionsReleasesListRequest extends SpeakeasyBase {
    pathParams: VersionhistoryPlatformsChannelsVersionsReleasesListPathParams;
    queryParams: VersionhistoryPlatformsChannelsVersionsReleasesListQueryParams;
}
export declare class VersionhistoryPlatformsChannelsVersionsReleasesListResponse extends SpeakeasyBase {
    contentType: string;
    listReleasesResponse?: shared.ListReleasesResponse;
    statusCode: number;
}
