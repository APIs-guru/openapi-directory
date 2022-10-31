package operations

import (
"openapi/pkg/models/shared")

type DfareportingAdvertiserGroupsUpdatePathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}

type DfareportingAdvertiserGroupsUpdateQueryParams struct {
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

type DfareportingAdvertiserGroupsUpdateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingAdvertiserGroupsUpdateRequest struct {
    PathParams DfareportingAdvertiserGroupsUpdatePathParams 
    QueryParams DfareportingAdvertiserGroupsUpdateQueryParams 
    Request *shared.AdvertiserGroup `request:"mediaType=application/json"`
    Security DfareportingAdvertiserGroupsUpdateSecurity 
    
}

type DfareportingAdvertiserGroupsUpdateResponse struct {
    AdvertiserGroup *shared.AdvertiserGroup 
    ContentType string 
    StatusCode int64 
    
}

