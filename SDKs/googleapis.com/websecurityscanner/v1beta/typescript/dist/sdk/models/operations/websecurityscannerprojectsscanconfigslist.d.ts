import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebsecurityscannerProjectsScanConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class WebsecurityscannerProjectsScanConfigsListQueryParams extends SpeakeasyBase {
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
export declare class WebsecurityscannerProjectsScanConfigsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebsecurityscannerProjectsScanConfigsListRequest extends SpeakeasyBase {
    pathParams: WebsecurityscannerProjectsScanConfigsListPathParams;
    queryParams: WebsecurityscannerProjectsScanConfigsListQueryParams;
    security: WebsecurityscannerProjectsScanConfigsListSecurity;
}
export declare class WebsecurityscannerProjectsScanConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    listScanConfigsResponse?: shared.ListScanConfigsResponse;
    statusCode: number;
}
