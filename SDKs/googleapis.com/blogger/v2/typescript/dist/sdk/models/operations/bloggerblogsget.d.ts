import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerBlogsGetPathParams extends SpeakeasyBase {
    blogId: string;
}
export declare class BloggerBlogsGetQueryParams extends SpeakeasyBase {
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
export declare class BloggerBlogsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerBlogsGetRequest extends SpeakeasyBase {
    pathParams: BloggerBlogsGetPathParams;
    queryParams: BloggerBlogsGetQueryParams;
    security: BloggerBlogsGetSecurity;
}
export declare class BloggerBlogsGetResponse extends SpeakeasyBase {
    blog?: shared.Blog;
    contentType: string;
    statusCode: number;
}
