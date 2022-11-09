import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BloggerPostsSearchPathParams extends SpeakeasyBase {
    blogId: string;
}
export declare enum BloggerPostsSearchOrderByEnum {
    OrderByUnspecified = "ORDER_BY_UNSPECIFIED",
    Published = "PUBLISHED",
    Updated = "UPDATED"
}
export declare class BloggerPostsSearchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fetchBodies?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: BloggerPostsSearchOrderByEnum;
    prettyPrint?: boolean;
    q: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BloggerPostsSearchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostsSearchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostsSearchSecurity extends SpeakeasyBase {
    option1?: BloggerPostsSearchSecurityOption1;
    option2?: BloggerPostsSearchSecurityOption2;
}
export declare class BloggerPostsSearchRequest extends SpeakeasyBase {
    pathParams: BloggerPostsSearchPathParams;
    queryParams: BloggerPostsSearchQueryParams;
    security: BloggerPostsSearchSecurity;
}
export declare class BloggerPostsSearchResponse extends SpeakeasyBase {
    contentType: string;
    postList?: shared.PostList;
    statusCode: number;
}
