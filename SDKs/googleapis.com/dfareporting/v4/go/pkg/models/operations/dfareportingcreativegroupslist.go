package operations

import (
"openapi/pkg/models/shared")

type DfareportingCreativeGroupsListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingCreativeGroupsListSortFieldEnum string

const (
    DfareportingCreativeGroupsListSortFieldEnumID DfareportingCreativeGroupsListSortFieldEnum = "ID"
DfareportingCreativeGroupsListSortFieldEnumName DfareportingCreativeGroupsListSortFieldEnum = "NAME"
)



type DfareportingCreativeGroupsListSortOrderEnum string

const (
    DfareportingCreativeGroupsListSortOrderEnumAscending DfareportingCreativeGroupsListSortOrderEnum = "ASCENDING"
DfareportingCreativeGroupsListSortOrderEnumDescending DfareportingCreativeGroupsListSortOrderEnum = "DESCENDING"
)


type DfareportingCreativeGroupsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    AdvertiserIds []string `queryParam:"style=form,explode=true,name=advertiserIds"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    GroupNumber *int64 `queryParam:"style=form,explode=true,name=groupNumber"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SearchString *string `queryParam:"style=form,explode=true,name=searchString"`
    SortField *DfareportingCreativeGroupsListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingCreativeGroupsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingCreativeGroupsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingCreativeGroupsListRequest struct {
    PathParams DfareportingCreativeGroupsListPathParams 
    QueryParams DfareportingCreativeGroupsListQueryParams 
    Security DfareportingCreativeGroupsListSecurity 
    
}

type DfareportingCreativeGroupsListResponse struct {
    ContentType string 
    CreativeGroupsListResponse *shared.CreativeGroupsListResponse 
    StatusCode int64 
    
}

