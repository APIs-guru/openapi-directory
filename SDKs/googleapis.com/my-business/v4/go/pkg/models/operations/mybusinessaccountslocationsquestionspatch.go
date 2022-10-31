package operations

import (
"openapi/pkg/models/shared")

type MybusinessAccountsLocationsQuestionsPatchPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type MybusinessAccountsLocationsQuestionsPatchQueryParams struct {
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

type MybusinessAccountsLocationsQuestionsPatchRequest struct {
    PathParams MybusinessAccountsLocationsQuestionsPatchPathParams 
    QueryParams MybusinessAccountsLocationsQuestionsPatchQueryParams 
    Request *shared.Question `request:"mediaType=application/json"`
    
}

type MybusinessAccountsLocationsQuestionsPatchResponse struct {
    ContentType string 
    Question *shared.Question 
    StatusCode int64 
    
}

