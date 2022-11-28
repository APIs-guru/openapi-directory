import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebsecurityscannerProjectsScanConfigsScanRunsFindingsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest extends SpeakeasyBase {
    pathParams: WebsecurityscannerProjectsScanConfigsScanRunsFindingsListPathParams;
    queryParams: WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams;
    security: WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse extends SpeakeasyBase {
    contentType: string;
    listFindingsResponse?: shared.ListFindingsResponse;
    statusCode: number;
}
