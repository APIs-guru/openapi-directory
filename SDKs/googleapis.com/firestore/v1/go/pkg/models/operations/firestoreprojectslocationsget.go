package operations

import (
"openapi/pkg/models/shared")

type FirestoreProjectsLocationsGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type FirestoreProjectsLocationsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaskFieldPaths []string `queryParam:"style=form,explode=true,name=mask.fieldPaths"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ReadTime *string `queryParam:"style=form,explode=true,name=readTime"`
    Transaction *string `queryParam:"style=form,explode=true,name=transaction"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirestoreProjectsLocationsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsLocationsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsLocationsGetSecurity struct {
    Option1 *FirestoreProjectsLocationsGetSecurityOption1 `security:"option"`
    Option2 *FirestoreProjectsLocationsGetSecurityOption2 `security:"option"`
    
}

type FirestoreProjectsLocationsGetRequest struct {
    PathParams FirestoreProjectsLocationsGetPathParams 
    QueryParams FirestoreProjectsLocationsGetQueryParams 
    Security FirestoreProjectsLocationsGetSecurity 
    
}

type FirestoreProjectsLocationsGetResponse struct {
    ContentType string 
    Location *shared.Location 
    StatusCode int64 
    
}

