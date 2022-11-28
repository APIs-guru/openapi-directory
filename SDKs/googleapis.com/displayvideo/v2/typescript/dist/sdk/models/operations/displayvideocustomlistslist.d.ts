import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoCustomListsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
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
export declare class DisplayvideoCustomListsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoCustomListsListRequest extends SpeakeasyBase {
    queryParams: DisplayvideoCustomListsListQueryParams;
    security: DisplayvideoCustomListsListSecurity;
}
export declare class DisplayvideoCustomListsListResponse extends SpeakeasyBase {
    contentType: string;
    listCustomListsResponse?: shared.ListCustomListsResponse;
    statusCode: number;
}
