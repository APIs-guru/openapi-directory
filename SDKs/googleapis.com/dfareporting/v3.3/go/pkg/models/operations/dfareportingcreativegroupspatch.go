package operations

import (
"openapi/pkg/models/shared")

type DfareportingCreativeGroupsPatchPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}

type DfareportingCreativeGroupsPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    ID string `queryParam:"style=form,explode=true,name=id"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingCreativeGroupsPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingCreativeGroupsPatchRequest struct {
    PathParams DfareportingCreativeGroupsPatchPathParams 
    QueryParams DfareportingCreativeGroupsPatchQueryParams 
    Request *shared.CreativeGroup `request:"mediaType=application/json"`
    Security DfareportingCreativeGroupsPatchSecurity 
    
}

type DfareportingCreativeGroupsPatchResponse struct {
    ContentType string 
    CreativeGroup *shared.CreativeGroup 
    StatusCode int64 
    
}

