import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPagesRevertPathParams extends SpeakeasyBase {
    blogId: string;
    pageId: string;
}
export declare class BloggerPagesRevertQueryParams extends SpeakeasyBase {
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
export declare class BloggerPagesRevertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPagesRevertRequest extends SpeakeasyBase {
    pathParams: BloggerPagesRevertPathParams;
    queryParams: BloggerPagesRevertQueryParams;
    security: BloggerPagesRevertSecurity;
}
export declare class BloggerPagesRevertResponse extends SpeakeasyBase {
    contentType: string;
    page?: shared.Page;
    statusCode: number;
}
