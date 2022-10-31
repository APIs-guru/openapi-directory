package operations

import (
"openapi/pkg/models/shared")

type PeoplePeopleConnectionsListPathParams struct {
    ResourceName string `pathParam:"style=simple,explode=false,name=resourceName"`
    
}


type PeoplePeopleConnectionsListSortOrderEnum string

const (
    PeoplePeopleConnectionsListSortOrderEnumLastModifiedAscending PeoplePeopleConnectionsListSortOrderEnum = "LAST_MODIFIED_ASCENDING"
PeoplePeopleConnectionsListSortOrderEnumLastModifiedDescending PeoplePeopleConnectionsListSortOrderEnum = "LAST_MODIFIED_DESCENDING"
PeoplePeopleConnectionsListSortOrderEnumFirstNameAscending PeoplePeopleConnectionsListSortOrderEnum = "FIRST_NAME_ASCENDING"
PeoplePeopleConnectionsListSortOrderEnumLastNameAscending PeoplePeopleConnectionsListSortOrderEnum = "LAST_NAME_ASCENDING"
)



type PeoplePeopleConnectionsListSourcesEnum string

const (
    PeoplePeopleConnectionsListSourcesEnumReadSourceTypeUnspecified PeoplePeopleConnectionsListSourcesEnum = "READ_SOURCE_TYPE_UNSPECIFIED"
PeoplePeopleConnectionsListSourcesEnumReadSourceTypeProfile PeoplePeopleConnectionsListSourcesEnum = "READ_SOURCE_TYPE_PROFILE"
PeoplePeopleConnectionsListSourcesEnumReadSourceTypeContact PeoplePeopleConnectionsListSourcesEnum = "READ_SOURCE_TYPE_CONTACT"
PeoplePeopleConnectionsListSourcesEnumReadSourceTypeDomainContact PeoplePeopleConnectionsListSourcesEnum = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
)


type PeoplePeopleConnectionsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PersonFields *string `queryParam:"style=form,explode=true,name=personFields"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RequestMaskIncludeField *string `queryParam:"style=form,explode=true,name=requestMask.includeField"`
    RequestSyncToken *bool `queryParam:"style=form,explode=true,name=requestSyncToken"`
    SortOrder *PeoplePeopleConnectionsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    Sources []PeoplePeopleConnectionsListSourcesEnum `queryParam:"style=form,explode=true,name=sources"`
    SyncToken *string `queryParam:"style=form,explode=true,name=syncToken"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type PeoplePeopleConnectionsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleConnectionsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeoplePeopleConnectionsListSecurity struct {
    Option1 *PeoplePeopleConnectionsListSecurityOption1 `security:"option"`
    Option2 *PeoplePeopleConnectionsListSecurityOption2 `security:"option"`
    
}

type PeoplePeopleConnectionsListRequest struct {
    PathParams PeoplePeopleConnectionsListPathParams 
    QueryParams PeoplePeopleConnectionsListQueryParams 
    Security PeoplePeopleConnectionsListSecurity 
    
}

type PeoplePeopleConnectionsListResponse struct {
    ContentType string 
    ListConnectionsResponse *shared.ListConnectionsResponse 
    StatusCode int64 
    
}

