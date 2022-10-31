package operations

import (
"openapi/pkg/models/shared")

type MlProjectsLocationsStudiesTrialsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type MlProjectsLocationsStudiesTrialsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type MlProjectsLocationsStudiesTrialsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MlProjectsLocationsStudiesTrialsListRequest struct {
    PathParams MlProjectsLocationsStudiesTrialsListPathParams 
    QueryParams MlProjectsLocationsStudiesTrialsListQueryParams 
    Security MlProjectsLocationsStudiesTrialsListSecurity 
    
}

type MlProjectsLocationsStudiesTrialsListResponse struct {
    ContentType string 
    GoogleCloudMlV1ListTrialsResponse *shared.GoogleCloudMlV1ListTrialsResponse 
    StatusCode int64 
    
}

