package operations

import (
"openapi/pkg/models/shared")

type DfareportingFloodlightActivitiesListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum string

const (
    DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnumCounter DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum = "COUNTER"
DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnumSale DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum = "SALE"
)



type DfareportingFloodlightActivitiesListSortFieldEnum string

const (
    DfareportingFloodlightActivitiesListSortFieldEnumID DfareportingFloodlightActivitiesListSortFieldEnum = "ID"
DfareportingFloodlightActivitiesListSortFieldEnumName DfareportingFloodlightActivitiesListSortFieldEnum = "NAME"
)



type DfareportingFloodlightActivitiesListSortOrderEnum string

const (
    DfareportingFloodlightActivitiesListSortOrderEnumAscending DfareportingFloodlightActivitiesListSortOrderEnum = "ASCENDING"
DfareportingFloodlightActivitiesListSortOrderEnumDescending DfareportingFloodlightActivitiesListSortOrderEnum = "DESCENDING"
)


type DfareportingFloodlightActivitiesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    AdvertiserID *string `queryParam:"style=form,explode=true,name=advertiserId"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    FloodlightActivityGroupIds []string `queryParam:"style=form,explode=true,name=floodlightActivityGroupIds"`
    FloodlightActivityGroupName *string `queryParam:"style=form,explode=true,name=floodlightActivityGroupName"`
    FloodlightActivityGroupTagString *string `queryParam:"style=form,explode=true,name=floodlightActivityGroupTagString"`
    FloodlightActivityGroupType *DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum `queryParam:"style=form,explode=true,name=floodlightActivityGroupType"`
    FloodlightConfigurationID *string `queryParam:"style=form,explode=true,name=floodlightConfigurationId"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SearchString *string `queryParam:"style=form,explode=true,name=searchString"`
    SortField *DfareportingFloodlightActivitiesListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingFloodlightActivitiesListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    TagString *string `queryParam:"style=form,explode=true,name=tagString"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingFloodlightActivitiesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingFloodlightActivitiesListRequest struct {
    PathParams DfareportingFloodlightActivitiesListPathParams 
    QueryParams DfareportingFloodlightActivitiesListQueryParams 
    Security DfareportingFloodlightActivitiesListSecurity 
    
}

type DfareportingFloodlightActivitiesListResponse struct {
    ContentType string 
    FloodlightActivitiesListResponse *shared.FloodlightActivitiesListResponse 
    StatusCode int64 
    
}

