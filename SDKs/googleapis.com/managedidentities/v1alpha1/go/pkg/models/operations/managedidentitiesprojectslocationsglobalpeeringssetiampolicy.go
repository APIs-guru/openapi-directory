package operations

import (
"openapi/pkg/models/shared")

type ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyPathParams struct {
    Resource string `pathParam:"style=simple,explode=false,name=resource"`
    
}

type ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams struct {
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

type ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest struct {
    PathParams ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyPathParams 
    QueryParams ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams 
    Request *shared.SetIamPolicyRequest `request:"mediaType=application/json"`
    Security ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity 
    
}

type ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse struct {
    ContentType string 
    Policy *shared.Policy 
    StatusCode int64 
    
}

