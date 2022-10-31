package operations

import (
"openapi/pkg/models/shared")

type ContentOrdersListPathParams struct {
    MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
    
}


type ContentOrdersListStatusesEnum string

const (
    ContentOrdersListStatusesEnumActive ContentOrdersListStatusesEnum = "ACTIVE"
ContentOrdersListStatusesEnumCompleted ContentOrdersListStatusesEnum = "COMPLETED"
ContentOrdersListStatusesEnumCanceled ContentOrdersListStatusesEnum = "CANCELED"
ContentOrdersListStatusesEnumInProgress ContentOrdersListStatusesEnum = "IN_PROGRESS"
ContentOrdersListStatusesEnumPendingShipment ContentOrdersListStatusesEnum = "PENDING_SHIPMENT"
ContentOrdersListStatusesEnumPartiallyShipped ContentOrdersListStatusesEnum = "PARTIALLY_SHIPPED"
ContentOrdersListStatusesEnumShipped ContentOrdersListStatusesEnum = "SHIPPED"
ContentOrdersListStatusesEnumPartiallyDelivered ContentOrdersListStatusesEnum = "PARTIALLY_DELIVERED"
ContentOrdersListStatusesEnumDelivered ContentOrdersListStatusesEnum = "DELIVERED"
ContentOrdersListStatusesEnumPartiallyReturned ContentOrdersListStatusesEnum = "PARTIALLY_RETURNED"
ContentOrdersListStatusesEnumReturned ContentOrdersListStatusesEnum = "RETURNED"
)


type ContentOrdersListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Acknowledged *bool `queryParam:"style=form,explode=true,name=acknowledged"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PlacedDateEnd *string `queryParam:"style=form,explode=true,name=placedDateEnd"`
    PlacedDateStart *string `queryParam:"style=form,explode=true,name=placedDateStart"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Statuses []ContentOrdersListStatusesEnum `queryParam:"style=form,explode=true,name=statuses"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ContentOrdersListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContentOrdersListRequest struct {
    PathParams ContentOrdersListPathParams 
    QueryParams ContentOrdersListQueryParams 
    Security ContentOrdersListSecurity 
    
}

type ContentOrdersListResponse struct {
    ContentType string 
    OrdersListResponse *shared.OrdersListResponse 
    StatusCode int64 
    
}

