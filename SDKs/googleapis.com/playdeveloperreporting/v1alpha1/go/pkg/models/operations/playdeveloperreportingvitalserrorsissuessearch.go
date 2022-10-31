package operations

import (
"openapi/pkg/models/shared")

type PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    IntervalEndTimeDay *int64 `queryParam:"style=form,explode=true,name=interval.endTime.day"`
    IntervalEndTimeHours *int64 `queryParam:"style=form,explode=true,name=interval.endTime.hours"`
    IntervalEndTimeMinutes *int64 `queryParam:"style=form,explode=true,name=interval.endTime.minutes"`
    IntervalEndTimeMonth *int64 `queryParam:"style=form,explode=true,name=interval.endTime.month"`
    IntervalEndTimeNanos *int64 `queryParam:"style=form,explode=true,name=interval.endTime.nanos"`
    IntervalEndTimeSeconds *int64 `queryParam:"style=form,explode=true,name=interval.endTime.seconds"`
    IntervalEndTimeTimeZoneID *string `queryParam:"style=form,explode=true,name=interval.endTime.timeZone.id"`
    IntervalEndTimeTimeZoneVersion *string `queryParam:"style=form,explode=true,name=interval.endTime.timeZone.version"`
    IntervalEndTimeUtcOffset *string `queryParam:"style=form,explode=true,name=interval.endTime.utcOffset"`
    IntervalEndTimeYear *int64 `queryParam:"style=form,explode=true,name=interval.endTime.year"`
    IntervalStartTimeDay *int64 `queryParam:"style=form,explode=true,name=interval.startTime.day"`
    IntervalStartTimeHours *int64 `queryParam:"style=form,explode=true,name=interval.startTime.hours"`
    IntervalStartTimeMinutes *int64 `queryParam:"style=form,explode=true,name=interval.startTime.minutes"`
    IntervalStartTimeMonth *int64 `queryParam:"style=form,explode=true,name=interval.startTime.month"`
    IntervalStartTimeNanos *int64 `queryParam:"style=form,explode=true,name=interval.startTime.nanos"`
    IntervalStartTimeSeconds *int64 `queryParam:"style=form,explode=true,name=interval.startTime.seconds"`
    IntervalStartTimeTimeZoneID *string `queryParam:"style=form,explode=true,name=interval.startTime.timeZone.id"`
    IntervalStartTimeTimeZoneVersion *string `queryParam:"style=form,explode=true,name=interval.startTime.timeZone.version"`
    IntervalStartTimeUtcOffset *string `queryParam:"style=form,explode=true,name=interval.startTime.utcOffset"`
    IntervalStartTimeYear *int64 `queryParam:"style=form,explode=true,name=interval.startTime.year"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type PlaydeveloperreportingVitalsErrorsIssuesSearchRequest struct {
    PathParams PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams 
    QueryParams PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams 
    
}

type PlaydeveloperreportingVitalsErrorsIssuesSearchResponse struct {
    ContentType string 
    GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse *shared.GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse 
    StatusCode int64 
    
}

