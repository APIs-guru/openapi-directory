package operations

import (
"openapi/pkg/models/shared")

type MybusinesslodgingLocationsLodgingGetGoogleUpdatedPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type MybusinesslodgingLocationsLodgingGetGoogleUpdatedQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ReadMask *string `queryParam:"style=form,explode=true,name=readMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type MybusinesslodgingLocationsLodgingGetGoogleUpdatedRequest struct {
    PathParams MybusinesslodgingLocationsLodgingGetGoogleUpdatedPathParams 
    QueryParams MybusinesslodgingLocationsLodgingGetGoogleUpdatedQueryParams 
    
}

type MybusinesslodgingLocationsLodgingGetGoogleUpdatedResponse struct {
    ContentType string 
    GetGoogleUpdatedLodgingResponse *shared.GetGoogleUpdatedLodgingResponse 
    StatusCode int64 
    
}

