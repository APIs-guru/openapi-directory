import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPagesUpdatePathParams extends SpeakeasyBase {
    blogId: string;
    pageId: string;
}
export declare class BloggerPagesUpdateQueryParams extends SpeakeasyBase {
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
export declare class BloggerPagesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPagesUpdateRequest extends SpeakeasyBase {
    pathParams: BloggerPagesUpdatePathParams;
    queryParams: BloggerPagesUpdateQueryParams;
    request?: shared.Page;
    security: BloggerPagesUpdateSecurity;
}
export declare class BloggerPagesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    page?: shared.Page;
    statusCode: number;
}
