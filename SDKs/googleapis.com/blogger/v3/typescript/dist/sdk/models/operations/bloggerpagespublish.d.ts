import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPagesPublishPathParams extends SpeakeasyBase {
    blogId: string;
    pageId: string;
}
export declare class BloggerPagesPublishQueryParams extends SpeakeasyBase {
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
export declare class BloggerPagesPublishSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPagesPublishRequest extends SpeakeasyBase {
    pathParams: BloggerPagesPublishPathParams;
    queryParams: BloggerPagesPublishQueryParams;
    security: BloggerPagesPublishSecurity;
}
export declare class BloggerPagesPublishResponse extends SpeakeasyBase {
    contentType: string;
    page?: shared.Page;
    statusCode: number;
}
