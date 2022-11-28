import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsReportInsightsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsLocationsReportInsightsQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsReportInsightsRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsReportInsightsPathParams;
    queryParams: MybusinessAccountsLocationsReportInsightsQueryParams;
    request?: shared.ReportLocationInsightsRequest;
}
export declare class MybusinessAccountsLocationsReportInsightsResponse extends SpeakeasyBase {
    contentType: string;
    reportLocationInsightsResponse?: shared.ReportLocationInsightsResponse;
    statusCode: number;
}
