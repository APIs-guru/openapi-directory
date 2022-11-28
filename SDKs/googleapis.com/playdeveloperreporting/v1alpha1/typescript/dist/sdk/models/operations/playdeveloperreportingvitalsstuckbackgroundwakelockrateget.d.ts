import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams extends SpeakeasyBase {
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
export declare class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest extends SpeakeasyBase {
    pathParams: PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetPathParams;
    queryParams: PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams;
}
export declare class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse extends SpeakeasyBase {
    contentType: string;
    googlePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet?: shared.GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet;
    statusCode: number;
}
