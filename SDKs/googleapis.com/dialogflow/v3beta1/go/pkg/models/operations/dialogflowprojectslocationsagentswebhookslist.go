package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentsWebhooksListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsAgentsWebhooksListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DialogflowProjectsLocationsAgentsWebhooksListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsWebhooksListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsWebhooksListSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentsWebhooksListSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentsWebhooksListSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentsWebhooksListRequest struct {
    PathParams DialogflowProjectsLocationsAgentsWebhooksListPathParams 
    QueryParams DialogflowProjectsLocationsAgentsWebhooksListQueryParams 
    Security DialogflowProjectsLocationsAgentsWebhooksListSecurity 
    
}

type DialogflowProjectsLocationsAgentsWebhooksListResponse struct {
    ContentType string 
    GoogleCloudDialogflowCxV3beta1ListWebhooksResponse *shared.GoogleCloudDialogflowCxV3beta1ListWebhooksResponse 
    StatusCode int64 
    
}

