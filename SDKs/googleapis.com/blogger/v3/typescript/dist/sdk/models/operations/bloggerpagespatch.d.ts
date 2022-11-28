import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPagesPatchPathParams extends SpeakeasyBase {
    blogId: string;
    pageId: string;
}
export declare class BloggerPagesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    publish?: boolean;
    quotaUser?: string;
    revert?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BloggerPagesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPagesPatchRequest extends SpeakeasyBase {
    pathParams: BloggerPagesPatchPathParams;
    queryParams: BloggerPagesPatchQueryParams;
    request?: shared.Page;
    security: BloggerPagesPatchSecurity;
}
export declare class BloggerPagesPatchResponse extends SpeakeasyBase {
    contentType: string;
    page?: shared.Page;
    statusCode: number;
}
