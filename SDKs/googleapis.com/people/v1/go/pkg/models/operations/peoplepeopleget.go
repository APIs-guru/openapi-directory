package operations

import (
"openapi/pkg/models/shared")

type PeoplePeopleGetPathParams struct {
    ResourceName string `pathParam:"style=simple,explode=false,name=resourceName"`
    
}


type PeoplePeopleGetSourcesEnum string

const (
    PeoplePeopleGetSourcesEnumReadSourceTypeUnspecified PeoplePeopleGetSourcesEnum = "READ_SOURCE_TYPE_UNSPECIFIED"
PeoplePeopleGetSourcesEnumReadSourceTypeProfile PeoplePeopleGetSourcesEnum = "READ_SOURCE_TYPE_PROFILE"
PeoplePeopleGetSourcesEnumReadSourceTypeContact PeoplePeopleGetSourcesEnum = "READ_SOURCE_TYPE_CONTACT"
PeoplePeopleGetSourcesEnumReadSourceTypeDomainContact PeoplePeopleGetSourcesEnum = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
)


type PeoplePeopleGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PersonFields *string `queryParam:"style=form,explode=true,name=personFields"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RequestMaskIncludeField *string `queryParam:"style=form,explode=true,name=requestMask.includeField"`
    Sources []PeoplePeopleGetSourcesEnum `queryParam:"style=form,explode=true,name=sources"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type PeoplePeopleGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleGetSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleGetSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleGetSecurityOption8 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleGetSecurityOption9 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleGetSecurityOption10 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleGetSecurityOption11 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleGetSecurity struct {
    Option1 *PeoplePeopleGetSecurityOption1 `security:"option"`
    Option2 *PeoplePeopleGetSecurityOption2 `security:"option"`
    Option3 *PeoplePeopleGetSecurityOption3 `security:"option"`
    Option4 *PeoplePeopleGetSecurityOption4 `security:"option"`
    Option5 *PeoplePeopleGetSecurityOption5 `security:"option"`
    Option6 *PeoplePeopleGetSecurityOption6 `security:"option"`
    Option7 *PeoplePeopleGetSecurityOption7 `security:"option"`
    Option8 *PeoplePeopleGetSecurityOption8 `security:"option"`
    Option9 *PeoplePeopleGetSecurityOption9 `security:"option"`
    Option10 *PeoplePeopleGetSecurityOption10 `security:"option"`
    Option11 *PeoplePeopleGetSecurityOption11 `security:"option"`
    
}

type PeoplePeopleGetRequest struct {
    PathParams PeoplePeopleGetPathParams 
    QueryParams PeoplePeopleGetQueryParams 
    Security PeoplePeopleGetSecurity 
    
}

type PeoplePeopleGetResponse struct {
    ContentType string 
    Person *shared.Person 
    StatusCode int64 
    
}

