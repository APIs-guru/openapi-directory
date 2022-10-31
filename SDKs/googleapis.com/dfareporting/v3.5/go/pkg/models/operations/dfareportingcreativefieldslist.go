package operations

import (
"openapi/pkg/models/shared")

type DfareportingCreativeFieldsListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingCreativeFieldsListSortFieldEnum string

const (
    DfareportingCreativeFieldsListSortFieldEnumID DfareportingCreativeFieldsListSortFieldEnum = "ID"
DfareportingCreativeFieldsListSortFieldEnumName DfareportingCreativeFieldsListSortFieldEnum = "NAME"
)



type DfareportingCreativeFieldsListSortOrderEnum string

const (
    DfareportingCreativeFieldsListSortOrderEnumAscending DfareportingCreativeFieldsListSortOrderEnum = "ASCENDING"
DfareportingCreativeFieldsListSortOrderEnumDescending DfareportingCreativeFieldsListSortOrderEnum = "DESCENDING"
)


type DfareportingCreativeFieldsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    AdvertiserIds []string `queryParam:"style=form,explode=true,name=advertiserIds"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SearchString *string `queryParam:"style=form,explode=true,name=searchString"`
    SortField *DfareportingCreativeFieldsListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingCreativeFieldsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingCreativeFieldsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingCreativeFieldsListRequest struct {
    PathParams DfareportingCreativeFieldsListPathParams 
    QueryParams DfareportingCreativeFieldsListQueryParams 
    Security DfareportingCreativeFieldsListSecurity 
    
}

type DfareportingCreativeFieldsListResponse struct {
    ContentType string 
    CreativeFieldsListResponse *shared.CreativeFieldsListResponse 
    StatusCode int64 
    
}

