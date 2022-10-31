package operations

import (
"openapi/pkg/models/shared")

type DfareportingEventTagsListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingEventTagsListEventTagTypesEnum string

const (
    DfareportingEventTagsListEventTagTypesEnumImpressionImageEventTag DfareportingEventTagsListEventTagTypesEnum = "IMPRESSION_IMAGE_EVENT_TAG"
DfareportingEventTagsListEventTagTypesEnumImpressionJavascriptEventTag DfareportingEventTagsListEventTagTypesEnum = "IMPRESSION_JAVASCRIPT_EVENT_TAG"
DfareportingEventTagsListEventTagTypesEnumClickThroughEventTag DfareportingEventTagsListEventTagTypesEnum = "CLICK_THROUGH_EVENT_TAG"
)



type DfareportingEventTagsListSortFieldEnum string

const (
    DfareportingEventTagsListSortFieldEnumID DfareportingEventTagsListSortFieldEnum = "ID"
DfareportingEventTagsListSortFieldEnumName DfareportingEventTagsListSortFieldEnum = "NAME"
)



type DfareportingEventTagsListSortOrderEnum string

const (
    DfareportingEventTagsListSortOrderEnumAscending DfareportingEventTagsListSortOrderEnum = "ASCENDING"
DfareportingEventTagsListSortOrderEnumDescending DfareportingEventTagsListSortOrderEnum = "DESCENDING"
)


type DfareportingEventTagsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    AdID *string `queryParam:"style=form,explode=true,name=adId"`
    AdvertiserID *string `queryParam:"style=form,explode=true,name=advertiserId"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CampaignID *string `queryParam:"style=form,explode=true,name=campaignId"`
    DefinitionsOnly *bool `queryParam:"style=form,explode=true,name=definitionsOnly"`
    Enabled *bool `queryParam:"style=form,explode=true,name=enabled"`
    EventTagTypes []DfareportingEventTagsListEventTagTypesEnum `queryParam:"style=form,explode=true,name=eventTagTypes"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SearchString *string `queryParam:"style=form,explode=true,name=searchString"`
    SortField *DfareportingEventTagsListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingEventTagsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingEventTagsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingEventTagsListRequest struct {
    PathParams DfareportingEventTagsListPathParams 
    QueryParams DfareportingEventTagsListQueryParams 
    Security DfareportingEventTagsListSecurity 
    
}

type DfareportingEventTagsListResponse struct {
    ContentType string 
    EventTagsListResponse *shared.EventTagsListResponse 
    StatusCode int64 
    
}

