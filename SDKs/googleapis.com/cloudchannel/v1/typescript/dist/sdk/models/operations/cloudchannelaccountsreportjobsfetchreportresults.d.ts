import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsReportJobsFetchReportResultsPathParams extends SpeakeasyBase {
    reportJob: string;
}
export declare class CloudchannelAccountsReportJobsFetchReportResultsQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsReportJobsFetchReportResultsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsReportJobsFetchReportResultsRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsReportJobsFetchReportResultsPathParams;
    queryParams: CloudchannelAccountsReportJobsFetchReportResultsQueryParams;
    request?: shared.GoogleCloudChannelV1FetchReportResultsRequest;
    security: CloudchannelAccountsReportJobsFetchReportResultsSecurity;
}
export declare class CloudchannelAccountsReportJobsFetchReportResultsResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1FetchReportResultsResponse?: shared.GoogleCloudChannelV1FetchReportResultsResponse;
    statusCode: number;
}
