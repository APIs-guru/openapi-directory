package operations

import (
"openapi/pkg/models/shared")

type MybusinesslodgingLocationsUpdateLodgingPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type MybusinesslodgingLocationsUpdateLodgingQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type MybusinesslodgingLocationsUpdateLodgingRequest struct {
    PathParams MybusinesslodgingLocationsUpdateLodgingPathParams 
    QueryParams MybusinesslodgingLocationsUpdateLodgingQueryParams 
    Request *shared.Lodging `request:"mediaType=application/json"`
    
}

type MybusinesslodgingLocationsUpdateLodgingResponse struct {
    ContentType string 
    Lodging *shared.Lodging 
    StatusCode int64 
    
}

