import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BloggerPagesListPathParams extends SpeakeasyBase {
    blogId: string;
}
export declare class BloggerPagesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fetchBodies?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BloggerPagesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPagesListRequest extends SpeakeasyBase {
    pathParams: BloggerPagesListPathParams;
    queryParams: BloggerPagesListQueryParams;
    security: BloggerPagesListSecurity;
}
export declare class BloggerPagesListResponse extends SpeakeasyBase {
    contentType: string;
    pageList?: shared.PageList;
    statusCode: number;
}
