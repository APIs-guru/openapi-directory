import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerScansListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum SpannerScansListViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Summary = "SUMMARY",
    Full = "FULL"
}
export declare class SpannerScansListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: SpannerScansListViewEnum;
}
export declare class SpannerScansListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerScansListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerScansListSecurity extends SpeakeasyBase {
    option1?: SpannerScansListSecurityOption1;
    option2?: SpannerScansListSecurityOption2;
}
export declare class SpannerScansListRequest extends SpeakeasyBase {
    pathParams: SpannerScansListPathParams;
    queryParams: SpannerScansListQueryParams;
    security: SpannerScansListSecurity;
}
export declare class SpannerScansListResponse extends SpeakeasyBase {
    contentType: string;
    listScansResponse?: shared.ListScansResponse;
    statusCode: number;
}
