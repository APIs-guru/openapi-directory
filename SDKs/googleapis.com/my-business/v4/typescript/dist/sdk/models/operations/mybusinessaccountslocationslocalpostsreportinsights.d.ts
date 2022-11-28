import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsLocalPostsReportInsightsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsLocalPostsReportInsightsRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsLocalPostsReportInsightsPathParams;
    queryParams: MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams;
    request?: shared.ReportLocalPostInsightsRequest;
}
export declare class MybusinessAccountsLocationsLocalPostsReportInsightsResponse extends SpeakeasyBase {
    contentType: string;
    reportLocalPostInsightsResponse?: shared.ReportLocalPostInsightsResponse;
    statusCode: number;
}
