import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BloggerCommentsGetPathParams extends SpeakeasyBase {
    blogId: string;
    commentId: string;
    postId: string;
}
export declare enum BloggerCommentsGetViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare class BloggerCommentsGetQueryParams extends SpeakeasyBase {
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
    view?: BloggerCommentsGetViewEnum;
}
export declare class BloggerCommentsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerCommentsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerCommentsGetSecurity extends SpeakeasyBase {
    option1?: BloggerCommentsGetSecurityOption1;
    option2?: BloggerCommentsGetSecurityOption2;
}
export declare class BloggerCommentsGetRequest extends SpeakeasyBase {
    pathParams: BloggerCommentsGetPathParams;
    queryParams: BloggerCommentsGetQueryParams;
    security: BloggerCommentsGetSecurity;
}
export declare class BloggerCommentsGetResponse extends SpeakeasyBase {
    comment?: shared.Comment;
    contentType: string;
    statusCode: number;
}
