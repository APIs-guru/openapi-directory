import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams extends SpeakeasyBase {
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
export declare class PlaydeveloperreportingVitalsErrorsIssuesSearchRequest extends SpeakeasyBase {
    pathParams: PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams;
    queryParams: PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams;
}
export declare class PlaydeveloperreportingVitalsErrorsIssuesSearchResponse extends SpeakeasyBase {
    contentType: string;
    googlePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse?: shared.GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse;
    statusCode: number;
}
