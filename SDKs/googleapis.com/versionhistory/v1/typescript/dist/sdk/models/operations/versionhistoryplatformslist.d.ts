import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VersionhistoryPlatformsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VersionhistoryPlatformsListQueryParams extends SpeakeasyBase {
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
export declare class VersionhistoryPlatformsListRequest extends SpeakeasyBase {
    pathParams: VersionhistoryPlatformsListPathParams;
    queryParams: VersionhistoryPlatformsListQueryParams;
}
export declare class VersionhistoryPlatformsListResponse extends SpeakeasyBase {
    contentType: string;
    listPlatformsResponse?: shared.ListPlatformsResponse;
    statusCode: number;
}
