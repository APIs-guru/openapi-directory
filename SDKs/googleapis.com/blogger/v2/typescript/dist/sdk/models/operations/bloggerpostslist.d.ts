import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPostsListPathParams extends SpeakeasyBase {
    blogId: string;
}
export declare class BloggerPostsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fetchBodies?: boolean;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startDate?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BloggerPostsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostsListRequest extends SpeakeasyBase {
    pathParams: BloggerPostsListPathParams;
    queryParams: BloggerPostsListQueryParams;
    security: BloggerPostsListSecurity;
}
export declare class BloggerPostsListResponse extends SpeakeasyBase {
    contentType: string;
    postList?: shared.PostList;
    statusCode: number;
}
