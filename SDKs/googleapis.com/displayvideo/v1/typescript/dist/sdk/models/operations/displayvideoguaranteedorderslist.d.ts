import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoGuaranteedOrdersListQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoGuaranteedOrdersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoGuaranteedOrdersListRequest extends SpeakeasyBase {
    queryParams: DisplayvideoGuaranteedOrdersListQueryParams;
    security: DisplayvideoGuaranteedOrdersListSecurity;
}
export declare class DisplayvideoGuaranteedOrdersListResponse extends SpeakeasyBase {
    contentType: string;
    listGuaranteedOrdersResponse?: shared.ListGuaranteedOrdersResponse;
    statusCode: number;
}
