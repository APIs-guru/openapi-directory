package operations

import (
"openapi/pkg/models/shared")


type PeoplePeopleSearchContactsSourcesEnum string

const (
    PeoplePeopleSearchContactsSourcesEnumReadSourceTypeUnspecified PeoplePeopleSearchContactsSourcesEnum = "READ_SOURCE_TYPE_UNSPECIFIED"
PeoplePeopleSearchContactsSourcesEnumReadSourceTypeProfile PeoplePeopleSearchContactsSourcesEnum = "READ_SOURCE_TYPE_PROFILE"
PeoplePeopleSearchContactsSourcesEnumReadSourceTypeContact PeoplePeopleSearchContactsSourcesEnum = "READ_SOURCE_TYPE_CONTACT"
PeoplePeopleSearchContactsSourcesEnumReadSourceTypeDomainContact PeoplePeopleSearchContactsSourcesEnum = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
)


type PeoplePeopleSearchContactsQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ReadMask *string `queryParam:"style=form,explode=true,name=readMask"`
    Sources []PeoplePeopleSearchContactsSourcesEnum `queryParam:"style=form,explode=true,name=sources"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type PeoplePeopleSearchContactsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleSearchContactsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleSearchContactsSecurity struct {
    Option1 *PeoplePeopleSearchContactsSecurityOption1 `security:"option"`
    Option2 *PeoplePeopleSearchContactsSecurityOption2 `security:"option"`
    
}

type PeoplePeopleSearchContactsRequest struct {
    QueryParams PeoplePeopleSearchContactsQueryParams 
    Security PeoplePeopleSearchContactsSecurity 
    
}

type PeoplePeopleSearchContactsResponse struct {
    ContentType string 
    SearchResponse *shared.SearchResponse 
    StatusCode int64 
    
}

