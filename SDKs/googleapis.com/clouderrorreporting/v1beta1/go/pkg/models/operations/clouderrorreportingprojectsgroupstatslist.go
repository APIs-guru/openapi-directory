package operations

import (
"openapi/pkg/models/shared")

type ClouderrorreportingProjectsGroupStatsListPathParams struct {
    ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
    
}


type ClouderrorreportingProjectsGroupStatsListAlignmentEnum string

const (
    ClouderrorreportingProjectsGroupStatsListAlignmentEnumErrorCountAlignmentUnspecified ClouderrorreportingProjectsGroupStatsListAlignmentEnum = "ERROR_COUNT_ALIGNMENT_UNSPECIFIED"
ClouderrorreportingProjectsGroupStatsListAlignmentEnumAlignmentEqualRounded ClouderrorreportingProjectsGroupStatsListAlignmentEnum = "ALIGNMENT_EQUAL_ROUNDED"
ClouderrorreportingProjectsGroupStatsListAlignmentEnumAlignmentEqualAtEnd ClouderrorreportingProjectsGroupStatsListAlignmentEnum = "ALIGNMENT_EQUAL_AT_END"
)



type ClouderrorreportingProjectsGroupStatsListOrderEnum string

const (
    ClouderrorreportingProjectsGroupStatsListOrderEnumGroupOrderUnspecified ClouderrorreportingProjectsGroupStatsListOrderEnum = "GROUP_ORDER_UNSPECIFIED"
ClouderrorreportingProjectsGroupStatsListOrderEnumCountDesc ClouderrorreportingProjectsGroupStatsListOrderEnum = "COUNT_DESC"
ClouderrorreportingProjectsGroupStatsListOrderEnumLastSeenDesc ClouderrorreportingProjectsGroupStatsListOrderEnum = "LAST_SEEN_DESC"
ClouderrorreportingProjectsGroupStatsListOrderEnumCreatedDesc ClouderrorreportingProjectsGroupStatsListOrderEnum = "CREATED_DESC"
ClouderrorreportingProjectsGroupStatsListOrderEnumAffectedUsersDesc ClouderrorreportingProjectsGroupStatsListOrderEnum = "AFFECTED_USERS_DESC"
)



type ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum string

const (
    ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnumPeriodUnspecified ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum = "PERIOD_UNSPECIFIED"
ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnumPeriod1Hour ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum = "PERIOD_1_HOUR"
ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnumPeriod6Hours ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum = "PERIOD_6_HOURS"
ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnumPeriod1Day ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum = "PERIOD_1_DAY"
ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnumPeriod1Week ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum = "PERIOD_1_WEEK"
ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnumPeriod30Days ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum = "PERIOD_30_DAYS"
)


type ClouderrorreportingProjectsGroupStatsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alignment *ClouderrorreportingProjectsGroupStatsListAlignmentEnum `queryParam:"style=form,explode=true,name=alignment"`
    AlignmentTime *string `queryParam:"style=form,explode=true,name=alignmentTime"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    GroupID []string `queryParam:"style=form,explode=true,name=groupId"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    Order *ClouderrorreportingProjectsGroupStatsListOrderEnum `queryParam:"style=form,explode=true,name=order"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ServiceFilterResourceType *string `queryParam:"style=form,explode=true,name=serviceFilter.resourceType"`
    ServiceFilterService *string `queryParam:"style=form,explode=true,name=serviceFilter.service"`
    ServiceFilterVersion *string `queryParam:"style=form,explode=true,name=serviceFilter.version"`
    TimeRangePeriod *ClouderrorreportingProjectsGroupStatsListTimeRangePeriodEnum `queryParam:"style=form,explode=true,name=timeRange.period"`
    TimedCountDuration *string `queryParam:"style=form,explode=true,name=timedCountDuration"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ClouderrorreportingProjectsGroupStatsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClouderrorreportingProjectsGroupStatsListRequest struct {
    PathParams ClouderrorreportingProjectsGroupStatsListPathParams 
    QueryParams ClouderrorreportingProjectsGroupStatsListQueryParams 
    Security ClouderrorreportingProjectsGroupStatsListSecurity 
    
}

type ClouderrorreportingProjectsGroupStatsListResponse struct {
    ContentType string 
    ListGroupStatsResponse *shared.ListGroupStatsResponse 
    StatusCode int64 
    
}

