package operations

import (
"openapi/pkg/models/shared")

type IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams struct {
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

type IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest struct {
    QueryParams IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams 
    Request *shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest `request:"mediaType=application/json"`
    Security IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity 
    
}

type IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse struct {
    ContentType string 
    GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse *shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse 
    StatusCode int64 
    
}

