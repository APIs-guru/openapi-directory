package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsConversationsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsConversationsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DialogflowProjectsLocationsConversationsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsConversationsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsConversationsListSecurity struct {
    Option1 *DialogflowProjectsLocationsConversationsListSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsConversationsListSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsConversationsListRequest struct {
    PathParams DialogflowProjectsLocationsConversationsListPathParams 
    QueryParams DialogflowProjectsLocationsConversationsListQueryParams 
    Security DialogflowProjectsLocationsConversationsListSecurity 
    
}

type DialogflowProjectsLocationsConversationsListResponse struct {
    ContentType string 
    GoogleCloudDialogflowV2beta1ListConversationsResponse *shared.GoogleCloudDialogflowV2beta1ListConversationsResponse 
    StatusCode int64 
    
}

