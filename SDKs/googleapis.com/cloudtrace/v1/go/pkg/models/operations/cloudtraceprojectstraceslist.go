package operations

import (
"openapi/pkg/models/shared")

type CloudtraceProjectsTracesListPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}


type CloudtraceProjectsTracesListViewEnum string

const (
    CloudtraceProjectsTracesListViewEnumViewTypeUnspecified CloudtraceProjectsTracesListViewEnum = "VIEW_TYPE_UNSPECIFIED"
CloudtraceProjectsTracesListViewEnumMinimal CloudtraceProjectsTracesListViewEnum = "MINIMAL"
CloudtraceProjectsTracesListViewEnumRootspan CloudtraceProjectsTracesListViewEnum = "ROOTSPAN"
CloudtraceProjectsTracesListViewEnumComplete CloudtraceProjectsTracesListViewEnum = "COMPLETE"
)


type CloudtraceProjectsTracesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    EndTime *string `queryParam:"style=form,explode=true,name=endTime"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartTime *string `queryParam:"style=form,explode=true,name=startTime"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *CloudtraceProjectsTracesListViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type CloudtraceProjectsTracesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudtraceProjectsTracesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudtraceProjectsTracesListSecurity struct {
    Option1 *CloudtraceProjectsTracesListSecurityOption1 `security:"option"`
    Option2 *CloudtraceProjectsTracesListSecurityOption2 `security:"option"`
    
}

type CloudtraceProjectsTracesListRequest struct {
    PathParams CloudtraceProjectsTracesListPathParams 
    QueryParams CloudtraceProjectsTracesListQueryParams 
    Security CloudtraceProjectsTracesListSecurity 
    
}

type CloudtraceProjectsTracesListResponse struct {
    ContentType string 
    ListTracesResponse *shared.ListTracesResponse 
    StatusCode int64 
    
}

