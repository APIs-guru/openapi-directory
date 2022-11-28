import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPageViewsGetPathParams extends SpeakeasyBase {
    blogId: string;
}
export declare enum BloggerPageViewsGetRangeEnum {
    All = "all",
    ThirtyDays = "30DAYS",
    SevenDays = "7DAYS"
}
export declare class BloggerPageViewsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    range?: BloggerPageViewsGetRangeEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BloggerPageViewsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPageViewsGetRequest extends SpeakeasyBase {
    pathParams: BloggerPageViewsGetPathParams;
    queryParams: BloggerPageViewsGetQueryParams;
    security: BloggerPageViewsGetSecurity;
}
export declare class BloggerPageViewsGetResponse extends SpeakeasyBase {
    contentType: string;
    pageviews?: shared.Pageviews;
    statusCode: number;
}
