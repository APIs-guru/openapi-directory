import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoInventorySourcesListQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoInventorySourcesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoInventorySourcesListRequest extends SpeakeasyBase {
    queryParams: DisplayvideoInventorySourcesListQueryParams;
    security: DisplayvideoInventorySourcesListSecurity;
}
export declare class DisplayvideoInventorySourcesListResponse extends SpeakeasyBase {
    contentType: string;
    listInventorySourcesResponse?: shared.ListInventorySourcesResponse;
    statusCode: number;
}
