package operations

import (
"openapi/pkg/models/shared")

type ClouderrorreportingProjectsEventsListPathParams struct {
    ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
    
}


type ClouderrorreportingProjectsEventsListTimeRangePeriodEnum string

const (
    ClouderrorreportingProjectsEventsListTimeRangePeriodEnumPeriodUnspecified ClouderrorreportingProjectsEventsListTimeRangePeriodEnum = "PERIOD_UNSPECIFIED"
ClouderrorreportingProjectsEventsListTimeRangePeriodEnumPeriod1Hour ClouderrorreportingProjectsEventsListTimeRangePeriodEnum = "PERIOD_1_HOUR"
ClouderrorreportingProjectsEventsListTimeRangePeriodEnumPeriod6Hours ClouderrorreportingProjectsEventsListTimeRangePeriodEnum = "PERIOD_6_HOURS"
ClouderrorreportingProjectsEventsListTimeRangePeriodEnumPeriod1Day ClouderrorreportingProjectsEventsListTimeRangePeriodEnum = "PERIOD_1_DAY"
ClouderrorreportingProjectsEventsListTimeRangePeriodEnumPeriod1Week ClouderrorreportingProjectsEventsListTimeRangePeriodEnum = "PERIOD_1_WEEK"
ClouderrorreportingProjectsEventsListTimeRangePeriodEnumPeriod30Days ClouderrorreportingProjectsEventsListTimeRangePeriodEnum = "PERIOD_30_DAYS"
)


type ClouderrorreportingProjectsEventsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    GroupID *string `queryParam:"style=form,explode=true,name=groupId"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ServiceFilterResourceType *string `queryParam:"style=form,explode=true,name=serviceFilter.resourceType"`
    ServiceFilterService *string `queryParam:"style=form,explode=true,name=serviceFilter.service"`
    ServiceFilterVersion *string `queryParam:"style=form,explode=true,name=serviceFilter.version"`
    TimeRangePeriod *ClouderrorreportingProjectsEventsListTimeRangePeriodEnum `queryParam:"style=form,explode=true,name=timeRange.period"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ClouderrorreportingProjectsEventsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClouderrorreportingProjectsEventsListRequest struct {
    PathParams ClouderrorreportingProjectsEventsListPathParams 
    QueryParams ClouderrorreportingProjectsEventsListQueryParams 
    Security ClouderrorreportingProjectsEventsListSecurity 
    
}

type ClouderrorreportingProjectsEventsListResponse struct {
    ContentType string 
    ListEventsResponse *shared.ListEventsResponse 
    StatusCode int64 
    
}

