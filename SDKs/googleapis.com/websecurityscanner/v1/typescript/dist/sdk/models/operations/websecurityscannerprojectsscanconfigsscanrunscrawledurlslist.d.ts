import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListRequest extends SpeakeasyBase {
    pathParams: WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListPathParams;
    queryParams: WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListQueryParams;
    security: WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListSecurity;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse extends SpeakeasyBase {
    contentType: string;
    listCrawledUrlsResponse?: shared.ListCrawledUrlsResponse;
    statusCode: number;
}
