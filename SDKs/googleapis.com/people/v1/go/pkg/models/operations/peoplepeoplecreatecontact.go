package operations

import (
"openapi/pkg/models/shared")


type PeoplePeopleCreateContactSourcesEnum string

const (
    PeoplePeopleCreateContactSourcesEnumReadSourceTypeUnspecified PeoplePeopleCreateContactSourcesEnum = "READ_SOURCE_TYPE_UNSPECIFIED"
PeoplePeopleCreateContactSourcesEnumReadSourceTypeProfile PeoplePeopleCreateContactSourcesEnum = "READ_SOURCE_TYPE_PROFILE"
PeoplePeopleCreateContactSourcesEnumReadSourceTypeContact PeoplePeopleCreateContactSourcesEnum = "READ_SOURCE_TYPE_CONTACT"
PeoplePeopleCreateContactSourcesEnumReadSourceTypeDomainContact PeoplePeopleCreateContactSourcesEnum = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
)


type PeoplePeopleCreateContactQueryParams struct {
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
    Sources []PeoplePeopleCreateContactSourcesEnum `queryParam:"style=form,explode=true,name=sources"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type PeoplePeopleCreateContactSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleCreateContactRequest struct {
    QueryParams PeoplePeopleCreateContactQueryParams 
    Request *shared.Person `request:"mediaType=application/json"`
    Security PeoplePeopleCreateContactSecurity 
    
}

type PeoplePeopleCreateContactResponse struct {
    ContentType string 
    Person *shared.Person 
    StatusCode int64 
    
}

