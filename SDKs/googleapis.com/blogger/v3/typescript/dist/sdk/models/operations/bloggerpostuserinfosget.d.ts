import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BloggerPostUserInfosGetPathParams extends SpeakeasyBase {
    blogId: string;
    postId: string;
    userId: string;
}
export declare class BloggerPostUserInfosGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxComments?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BloggerPostUserInfosGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostUserInfosGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostUserInfosGetSecurity extends SpeakeasyBase {
    option1?: BloggerPostUserInfosGetSecurityOption1;
    option2?: BloggerPostUserInfosGetSecurityOption2;
}
export declare class BloggerPostUserInfosGetRequest extends SpeakeasyBase {
    pathParams: BloggerPostUserInfosGetPathParams;
    queryParams: BloggerPostUserInfosGetQueryParams;
    security: BloggerPostUserInfosGetSecurity;
}
export declare class BloggerPostUserInfosGetResponse extends SpeakeasyBase {
    contentType: string;
    postUserInfo?: shared.PostUserInfo;
    statusCode: number;
}
