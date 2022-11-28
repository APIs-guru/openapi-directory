import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPagesInsertPathParams extends SpeakeasyBase {
    blogId: string;
}
export declare class BloggerPagesInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    isDraft?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BloggerPagesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPagesInsertRequest extends SpeakeasyBase {
    pathParams: BloggerPagesInsertPathParams;
    queryParams: BloggerPagesInsertQueryParams;
    request?: shared.Page;
    security: BloggerPagesInsertSecurity;
}
export declare class BloggerPagesInsertResponse extends SpeakeasyBase {
    contentType: string;
    page?: shared.Page;
    statusCode: number;
}
