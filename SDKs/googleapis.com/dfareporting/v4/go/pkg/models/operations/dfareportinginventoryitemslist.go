package operations

import (
"openapi/pkg/models/shared")

type DfareportingInventoryItemsListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}


type DfareportingInventoryItemsListSortFieldEnum string

const (
    DfareportingInventoryItemsListSortFieldEnumID DfareportingInventoryItemsListSortFieldEnum = "ID"
DfareportingInventoryItemsListSortFieldEnumName DfareportingInventoryItemsListSortFieldEnum = "NAME"
)



type DfareportingInventoryItemsListSortOrderEnum string

const (
    DfareportingInventoryItemsListSortOrderEnumAscending DfareportingInventoryItemsListSortOrderEnum = "ASCENDING"
DfareportingInventoryItemsListSortOrderEnumDescending DfareportingInventoryItemsListSortOrderEnum = "DESCENDING"
)



type DfareportingInventoryItemsListTypeEnum string

const (
    DfareportingInventoryItemsListTypeEnumPlanningPlacementTypeRegular DfareportingInventoryItemsListTypeEnum = "PLANNING_PLACEMENT_TYPE_REGULAR"
DfareportingInventoryItemsListTypeEnumPlanningPlacementTypeCredit DfareportingInventoryItemsListTypeEnum = "PLANNING_PLACEMENT_TYPE_CREDIT"
)


type DfareportingInventoryItemsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    InPlan *bool `queryParam:"style=form,explode=true,name=inPlan"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderID []string `queryParam:"style=form,explode=true,name=orderId"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SiteID []string `queryParam:"style=form,explode=true,name=siteId"`
    SortField *DfareportingInventoryItemsListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingInventoryItemsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    Type *DfareportingInventoryItemsListTypeEnum `queryParam:"style=form,explode=true,name=type"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingInventoryItemsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingInventoryItemsListRequest struct {
    PathParams DfareportingInventoryItemsListPathParams 
    QueryParams DfareportingInventoryItemsListQueryParams 
    Security DfareportingInventoryItemsListSecurity 
    
}

type DfareportingInventoryItemsListResponse struct {
    ContentType string 
    InventoryItemsListResponse *shared.InventoryItemsListResponse 
    StatusCode int64 
    
}

