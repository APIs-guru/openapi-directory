import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlaydeveloperreportingVitalsErrorsReportsSearchPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    intervalEndTimeDay?: number;
    intervalEndTimeHours?: number;
    intervalEndTimeMinutes?: number;
    intervalEndTimeMonth?: number;
    intervalEndTimeNanos?: number;
    intervalEndTimeSeconds?: number;
    intervalEndTimeTimeZoneId?: string;
    intervalEndTimeTimeZoneVersion?: string;
    intervalEndTimeUtcOffset?: string;
    intervalEndTimeYear?: number;
    intervalStartTimeDay?: number;
    intervalStartTimeHours?: number;
    intervalStartTimeMinutes?: number;
    intervalStartTimeMonth?: number;
    intervalStartTimeNanos?: number;
    intervalStartTimeSeconds?: number;
    intervalStartTimeTimeZoneId?: string;
    intervalStartTimeTimeZoneVersion?: string;
    intervalStartTimeUtcOffset?: string;
    intervalStartTimeYear?: number;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PlaydeveloperreportingVitalsErrorsReportsSearchRequest extends SpeakeasyBase {
    pathParams: PlaydeveloperreportingVitalsErrorsReportsSearchPathParams;
    queryParams: PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams;
}
export declare class PlaydeveloperreportingVitalsErrorsReportsSearchResponse extends SpeakeasyBase {
    contentType: string;
    googlePlayDeveloperReportingV1alpha1SearchErrorReportsResponse?: shared.GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse;
    statusCode: number;
}
