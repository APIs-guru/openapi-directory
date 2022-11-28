import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlaydeveloperreportingAnomaliesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PlaydeveloperreportingAnomaliesListQueryParams extends SpeakeasyBase {
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
export declare class PlaydeveloperreportingAnomaliesListRequest extends SpeakeasyBase {
    pathParams: PlaydeveloperreportingAnomaliesListPathParams;
    queryParams: PlaydeveloperreportingAnomaliesListQueryParams;
}
export declare class PlaydeveloperreportingAnomaliesListResponse extends SpeakeasyBase {
    contentType: string;
    googlePlayDeveloperReportingV1alpha1ListAnomaliesResponse?: shared.GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse;
    statusCode: number;
}
