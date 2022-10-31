package operations

import (
"openapi/pkg/models/shared")

type ContentOrderreturnsListPathParams struct {
    MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
    
}


type ContentOrderreturnsListOrderByEnum string

const (
    ContentOrderreturnsListOrderByEnumReturnCreationTimeDesc ContentOrderreturnsListOrderByEnum = "RETURN_CREATION_TIME_DESC"
ContentOrderreturnsListOrderByEnumReturnCreationTimeAsc ContentOrderreturnsListOrderByEnum = "RETURN_CREATION_TIME_ASC"
)



type ContentOrderreturnsListShipmentStatesEnum string

const (
    ContentOrderreturnsListShipmentStatesEnumNew ContentOrderreturnsListShipmentStatesEnum = "NEW"
ContentOrderreturnsListShipmentStatesEnumShipped ContentOrderreturnsListShipmentStatesEnum = "SHIPPED"
ContentOrderreturnsListShipmentStatesEnumCompleted ContentOrderreturnsListShipmentStatesEnum = "COMPLETED"
ContentOrderreturnsListShipmentStatesEnumUndeliverable ContentOrderreturnsListShipmentStatesEnum = "UNDELIVERABLE"
ContentOrderreturnsListShipmentStatesEnumPending ContentOrderreturnsListShipmentStatesEnum = "PENDING"
)



type ContentOrderreturnsListShipmentStatusEnum string

const (
    ContentOrderreturnsListShipmentStatusEnumNew ContentOrderreturnsListShipmentStatusEnum = "NEW"
ContentOrderreturnsListShipmentStatusEnumInProgress ContentOrderreturnsListShipmentStatusEnum = "IN_PROGRESS"
ContentOrderreturnsListShipmentStatusEnumProcessed ContentOrderreturnsListShipmentStatusEnum = "PROCESSED"
)



type ContentOrderreturnsListShipmentTypesEnum string

const (
    ContentOrderreturnsListShipmentTypesEnumByMail ContentOrderreturnsListShipmentTypesEnum = "BY_MAIL"
ContentOrderreturnsListShipmentTypesEnumReturnless ContentOrderreturnsListShipmentTypesEnum = "RETURNLESS"
ContentOrderreturnsListShipmentTypesEnumContactCustomerSupport ContentOrderreturnsListShipmentTypesEnum = "CONTACT_CUSTOMER_SUPPORT"
)


type ContentOrderreturnsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Acknowledged *bool `queryParam:"style=form,explode=true,name=acknowledged"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CreatedEndDate *string `queryParam:"style=form,explode=true,name=createdEndDate"`
    CreatedStartDate *string `queryParam:"style=form,explode=true,name=createdStartDate"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    GoogleOrderIds []string `queryParam:"style=form,explode=true,name=googleOrderIds"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *ContentOrderreturnsListOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ShipmentStates []ContentOrderreturnsListShipmentStatesEnum `queryParam:"style=form,explode=true,name=shipmentStates"`
    ShipmentStatus []ContentOrderreturnsListShipmentStatusEnum `queryParam:"style=form,explode=true,name=shipmentStatus"`
    ShipmentTrackingNumbers []string `queryParam:"style=form,explode=true,name=shipmentTrackingNumbers"`
    ShipmentTypes []ContentOrderreturnsListShipmentTypesEnum `queryParam:"style=form,explode=true,name=shipmentTypes"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ContentOrderreturnsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContentOrderreturnsListRequest struct {
    PathParams ContentOrderreturnsListPathParams 
    QueryParams ContentOrderreturnsListQueryParams 
    Security ContentOrderreturnsListSecurity 
    
}

type ContentOrderreturnsListResponse struct {
    ContentType string 
    OrderreturnsListResponse *shared.OrderreturnsListResponse 
    StatusCode int64 
    
}

