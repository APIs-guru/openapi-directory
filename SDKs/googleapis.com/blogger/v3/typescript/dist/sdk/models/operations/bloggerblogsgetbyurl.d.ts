import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BloggerBlogsGetByUrlViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare class BloggerBlogsGetByUrlQueryParams extends SpeakeasyBase {
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
    url: string;
    view?: BloggerBlogsGetByUrlViewEnum;
}
export declare class BloggerBlogsGetByUrlSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerBlogsGetByUrlSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerBlogsGetByUrlSecurity extends SpeakeasyBase {
    option1?: BloggerBlogsGetByUrlSecurityOption1;
    option2?: BloggerBlogsGetByUrlSecurityOption2;
}
export declare class BloggerBlogsGetByUrlRequest extends SpeakeasyBase {
    queryParams: BloggerBlogsGetByUrlQueryParams;
    security: BloggerBlogsGetByUrlSecurity;
}
export declare class BloggerBlogsGetByUrlResponse extends SpeakeasyBase {
    blog?: shared.Blog;
    contentType: string;
    statusCode: number;
}
