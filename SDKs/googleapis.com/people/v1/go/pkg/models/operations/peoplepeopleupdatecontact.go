package operations

import (
"openapi/pkg/models/shared")

type PeoplePeopleUpdateContactPathParams struct {
    ResourceName string `pathParam:"style=simple,explode=false,name=resourceName"`
    
}


type PeoplePeopleUpdateContactSourcesEnum string

const (
    PeoplePeopleUpdateContactSourcesEnumReadSourceTypeUnspecified PeoplePeopleUpdateContactSourcesEnum = "READ_SOURCE_TYPE_UNSPECIFIED"
PeoplePeopleUpdateContactSourcesEnumReadSourceTypeProfile PeoplePeopleUpdateContactSourcesEnum = "READ_SOURCE_TYPE_PROFILE"
PeoplePeopleUpdateContactSourcesEnumReadSourceTypeContact PeoplePeopleUpdateContactSourcesEnum = "READ_SOURCE_TYPE_CONTACT"
PeoplePeopleUpdateContactSourcesEnumReadSourceTypeDomainContact PeoplePeopleUpdateContactSourcesEnum = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
)


type PeoplePeopleUpdateContactQueryParams struct {
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
    Sources []PeoplePeopleUpdateContactSourcesEnum `queryParam:"style=form,explode=true,name=sources"`
    UpdatePersonFields *string `queryParam:"style=form,explode=true,name=updatePersonFields"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type PeoplePeopleUpdateContactSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleUpdateContactRequest struct {
    PathParams PeoplePeopleUpdateContactPathParams 
    QueryParams PeoplePeopleUpdateContactQueryParams 
    Request *shared.Person `request:"mediaType=application/json"`
    Security PeoplePeopleUpdateContactSecurity 
    
}

type PeoplePeopleUpdateContactResponse struct {
    ContentType string 
    Person *shared.Person 
    StatusCode int64 
    
}

