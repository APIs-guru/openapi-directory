package operations

import (
"time"
"openapi/pkg/models/shared")

type UpdateTransactionPathParams struct {
    TransactionNumber string `pathParam:"style=simple,explode=false,name=transactionNumber"`
    
}


type UpdateTransactionRequestBodySourceEnum string

const (
    UpdateTransactionRequestBodySourceEnumShop UpdateTransactionRequestBodySourceEnum = "SHOP"
)



type UpdateTransactionRequestBodyStatusEnum string

const (
    UpdateTransactionRequestBodyStatusEnumCancelled UpdateTransactionRequestBodyStatusEnum = "CANCELLED"
UpdateTransactionRequestBodyStatusEnumClosed UpdateTransactionRequestBodyStatusEnum = "CLOSED"
UpdateTransactionRequestBodyStatusEnumPending UpdateTransactionRequestBodyStatusEnum = "PENDING"
)


type UpdateTransactionRequestBody struct {
    Active *bool `form:"name=active"`
    DateClosed *time.Time `form:"name=dateClosed"`
    DateCreated *time.Time `form:"name=dateCreated"`
    Number *string `form:"name=number"`
    PaymentMethod *string `form:"name=paymentMethod"`
    Source *UpdateTransactionRequestBodySourceEnum `form:"name=source"`
    Status *UpdateTransactionRequestBodyStatusEnum `form:"name=status"`
    
}

type UpdateTransactionSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateTransactionRequest struct {
    PathParams UpdateTransactionPathParams 
    Request *UpdateTransactionRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateTransactionSecurity 
    
}

type UpdateTransactionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensing *interface{} 
    
}

