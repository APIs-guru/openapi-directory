import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoInventorySourceGroupsListQueryParams extends SpeakeasyBase {
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
    partnerId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoInventorySourceGroupsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoInventorySourceGroupsListRequest extends SpeakeasyBase {
    queryParams: DisplayvideoInventorySourceGroupsListQueryParams;
    security: DisplayvideoInventorySourceGroupsListSecurity;
}
export declare class DisplayvideoInventorySourceGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    listInventorySourceGroupsResponse?: shared.ListInventorySourceGroupsResponse;
    statusCode: number;
}
