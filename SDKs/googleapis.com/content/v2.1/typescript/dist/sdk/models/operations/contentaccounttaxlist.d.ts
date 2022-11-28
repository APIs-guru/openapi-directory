import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccounttaxListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentAccounttaxListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentAccounttaxListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccounttaxListRequest extends SpeakeasyBase {
    pathParams: ContentAccounttaxListPathParams;
    queryParams: ContentAccounttaxListQueryParams;
    security: ContentAccounttaxListSecurity;
}
export declare class ContentAccounttaxListResponse extends SpeakeasyBase {
    accounttaxListResponse?: shared.AccounttaxListResponse;
    contentType: string;
    statusCode: number;
}
