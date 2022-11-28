import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReportsSearchPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentReportsSearchQueryParams extends SpeakeasyBase {
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
export declare class ContentReportsSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentReportsSearchRequest extends SpeakeasyBase {
    pathParams: ContentReportsSearchPathParams;
    queryParams: ContentReportsSearchQueryParams;
    request?: shared.SearchRequest;
    security: ContentReportsSearchSecurity;
}
export declare class ContentReportsSearchResponse extends SpeakeasyBase {
    contentType: string;
    searchResponse?: shared.SearchResponse;
    statusCode: number;
}
