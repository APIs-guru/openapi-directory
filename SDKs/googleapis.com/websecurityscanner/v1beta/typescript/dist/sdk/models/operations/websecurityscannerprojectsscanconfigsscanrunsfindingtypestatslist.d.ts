import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams extends SpeakeasyBase {
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
export declare class WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest extends SpeakeasyBase {
    pathParams: WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListPathParams;
    queryParams: WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams;
    security: WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity;
}
export declare class WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse extends SpeakeasyBase {
    contentType: string;
    listFindingTypeStatsResponse?: shared.ListFindingTypeStatsResponse;
    statusCode: number;
}
