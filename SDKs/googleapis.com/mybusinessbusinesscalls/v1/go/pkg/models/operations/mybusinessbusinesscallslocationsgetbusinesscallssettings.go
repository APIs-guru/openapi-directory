package operations

import (
"openapi/pkg/models/shared")

type MybusinessbusinesscallsLocationsGetBusinesscallssettingsPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type MybusinessbusinesscallsLocationsGetBusinesscallssettingsQueryParams struct {
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

type MybusinessbusinesscallsLocationsGetBusinesscallssettingsRequest struct {
    PathParams MybusinessbusinesscallsLocationsGetBusinesscallssettingsPathParams 
    QueryParams MybusinessbusinesscallsLocationsGetBusinesscallssettingsQueryParams 
    
}

type MybusinessbusinesscallsLocationsGetBusinesscallssettingsResponse struct {
    BusinessCallsSettings *shared.BusinessCallsSettings 
    ContentType string 
    StatusCode int64 
    
}

