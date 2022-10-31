package operations

import (
"openapi/pkg/models/shared")

type DfareportingFloodlightActivityGroupsListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingFloodlightActivityGroupsListSortFieldEnum string

const (
    DfareportingFloodlightActivityGroupsListSortFieldEnumID DfareportingFloodlightActivityGroupsListSortFieldEnum = "ID"
DfareportingFloodlightActivityGroupsListSortFieldEnumName DfareportingFloodlightActivityGroupsListSortFieldEnum = "NAME"
)



type DfareportingFloodlightActivityGroupsListSortOrderEnum string

const (
    DfareportingFloodlightActivityGroupsListSortOrderEnumAscending DfareportingFloodlightActivityGroupsListSortOrderEnum = "ASCENDING"
DfareportingFloodlightActivityGroupsListSortOrderEnumDescending DfareportingFloodlightActivityGroupsListSortOrderEnum = "DESCENDING"
)



type DfareportingFloodlightActivityGroupsListTypeEnum string

const (
    DfareportingFloodlightActivityGroupsListTypeEnumCounter DfareportingFloodlightActivityGroupsListTypeEnum = "COUNTER"
DfareportingFloodlightActivityGroupsListTypeEnumSale DfareportingFloodlightActivityGroupsListTypeEnum = "SALE"
)


type DfareportingFloodlightActivityGroupsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    AdvertiserID *string `queryParam:"style=form,explode=true,name=advertiserId"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    FloodlightConfigurationID *string `queryParam:"style=form,explode=true,name=floodlightConfigurationId"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SearchString *string `queryParam:"style=form,explode=true,name=searchString"`
    SortField *DfareportingFloodlightActivityGroupsListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingFloodlightActivityGroupsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    Type *DfareportingFloodlightActivityGroupsListTypeEnum `queryParam:"style=form,explode=true,name=type"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingFloodlightActivityGroupsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingFloodlightActivityGroupsListRequest struct {
    PathParams DfareportingFloodlightActivityGroupsListPathParams 
    QueryParams DfareportingFloodlightActivityGroupsListQueryParams 
    Security DfareportingFloodlightActivityGroupsListSecurity 
    
}

type DfareportingFloodlightActivityGroupsListResponse struct {
    ContentType string 
    FloodlightActivityGroupsListResponse *shared.FloodlightActivityGroupsListResponse 
    StatusCode int64 
    
}

