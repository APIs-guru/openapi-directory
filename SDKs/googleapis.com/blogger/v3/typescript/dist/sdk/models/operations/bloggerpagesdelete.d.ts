import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPagesDeletePathParams extends SpeakeasyBase {
    blogId: string;
    pageId: string;
}
export declare class BloggerPagesDeleteQueryParams extends SpeakeasyBase {
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
export declare class BloggerPagesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPagesDeleteRequest extends SpeakeasyBase {
    pathParams: BloggerPagesDeletePathParams;
    queryParams: BloggerPagesDeleteQueryParams;
    security: BloggerPagesDeleteSecurity;
}
export declare class BloggerPagesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
