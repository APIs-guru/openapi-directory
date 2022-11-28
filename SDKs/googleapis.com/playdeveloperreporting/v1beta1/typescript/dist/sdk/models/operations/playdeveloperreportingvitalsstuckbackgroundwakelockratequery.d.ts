import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams extends SpeakeasyBase {
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
export declare class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest extends SpeakeasyBase {
    pathParams: PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryPathParams;
    queryParams: PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams;
    request?: shared.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest;
}
export declare class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse extends SpeakeasyBase {
    contentType: string;
    googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse?: shared.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse;
    statusCode: number;
}
