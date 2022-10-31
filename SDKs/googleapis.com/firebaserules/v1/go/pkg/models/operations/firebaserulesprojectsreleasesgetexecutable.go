package operations

import (
"openapi/pkg/models/shared")

type FirebaserulesProjectsReleasesGetExecutablePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum string

const (
    FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnumReleaseExecutableVersionUnspecified FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum = "RELEASE_EXECUTABLE_VERSION_UNSPECIFIED"
FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnumFirebaseRulesExecutableV1 FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum = "FIREBASE_RULES_EXECUTABLE_V1"
FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnumFirebaseRulesExecutableV2 FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum = "FIREBASE_RULES_EXECUTABLE_V2"
)


type FirebaserulesProjectsReleasesGetExecutableQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ExecutableVersion *FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum `queryParam:"style=form,explode=true,name=executableVersion"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirebaserulesProjectsReleasesGetExecutableSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaserulesProjectsReleasesGetExecutableSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaserulesProjectsReleasesGetExecutableSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaserulesProjectsReleasesGetExecutableSecurity struct {
    Option1 *FirebaserulesProjectsReleasesGetExecutableSecurityOption1 `security:"option"`
    Option2 *FirebaserulesProjectsReleasesGetExecutableSecurityOption2 `security:"option"`
    Option3 *FirebaserulesProjectsReleasesGetExecutableSecurityOption3 `security:"option"`
    
}

type FirebaserulesProjectsReleasesGetExecutableRequest struct {
    PathParams FirebaserulesProjectsReleasesGetExecutablePathParams 
    QueryParams FirebaserulesProjectsReleasesGetExecutableQueryParams 
    Security FirebaserulesProjectsReleasesGetExecutableSecurity 
    
}

type FirebaserulesProjectsReleasesGetExecutableResponse struct {
    ContentType string 
    GetReleaseExecutableResponse *shared.GetReleaseExecutableResponse 
    StatusCode int64 
    
}

