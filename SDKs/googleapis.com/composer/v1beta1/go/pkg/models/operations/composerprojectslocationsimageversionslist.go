package operations

import (
"openapi/pkg/models/shared")

type ComposerProjectsLocationsImageVersionsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type ComposerProjectsLocationsImageVersionsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IncludePastReleases *bool `queryParam:"style=form,explode=true,name=includePastReleases"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ComposerProjectsLocationsImageVersionsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ComposerProjectsLocationsImageVersionsListRequest struct {
    PathParams ComposerProjectsLocationsImageVersionsListPathParams 
    QueryParams ComposerProjectsLocationsImageVersionsListQueryParams 
    Security ComposerProjectsLocationsImageVersionsListSecurity 
    
}

type ComposerProjectsLocationsImageVersionsListResponse struct {
    ContentType string 
    ListImageVersionsResponse *shared.ListImageVersionsResponse 
    StatusCode int64 
    
}

