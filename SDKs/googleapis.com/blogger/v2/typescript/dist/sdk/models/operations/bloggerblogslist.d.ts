import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BloggerBlogsListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class BloggerBlogsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BloggerBlogsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerBlogsListRequest extends SpeakeasyBase {
    pathParams: BloggerBlogsListPathParams;
    queryParams: BloggerBlogsListQueryParams;
    security: BloggerBlogsListSecurity;
}
export declare class BloggerBlogsListResponse extends SpeakeasyBase {
    blogList?: shared.BlogList;
    contentType: string;
    statusCode: number;
}
