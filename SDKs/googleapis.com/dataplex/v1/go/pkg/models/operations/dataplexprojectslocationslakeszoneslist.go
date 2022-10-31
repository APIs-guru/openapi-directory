package operations

import (
"openapi/pkg/models/shared")

type DataplexProjectsLocationsLakesZonesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DataplexProjectsLocationsLakesZonesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DataplexProjectsLocationsLakesZonesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataplexProjectsLocationsLakesZonesListRequest struct {
    PathParams DataplexProjectsLocationsLakesZonesListPathParams 
    QueryParams DataplexProjectsLocationsLakesZonesListQueryParams 
    Security DataplexProjectsLocationsLakesZonesListSecurity 
    
}

type DataplexProjectsLocationsLakesZonesListResponse struct {
    ContentType string 
    GoogleCloudDataplexV1ListZonesResponse *shared.GoogleCloudDataplexV1ListZonesResponse 
    StatusCode int64 
    
}

