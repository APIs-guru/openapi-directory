package operations

import (
"time"
"openapi/pkg/models/shared")


type CreateTransactionRequestBodySourceEnum string

const (
    CreateTransactionRequestBodySourceEnumShop CreateTransactionRequestBodySourceEnum = "SHOP"
)



type CreateTransactionRequestBodyStatusEnum string

const (
    CreateTransactionRequestBodyStatusEnumCancelled CreateTransactionRequestBodyStatusEnum = "CANCELLED"
CreateTransactionRequestBodyStatusEnumClosed CreateTransactionRequestBodyStatusEnum = "CLOSED"
CreateTransactionRequestBodyStatusEnumPending CreateTransactionRequestBodyStatusEnum = "PENDING"
)


type CreateTransactionRequestBody struct {
    Active bool `form:"name=active"`
    DateClosed *time.Time `form:"name=dateClosed"`
    DateCreated *time.Time `form:"name=dateCreated"`
    LicenseeNumber *string `form:"name=licenseeNumber"`
    Number *string `form:"name=number"`
    PaymentMethod *string `form:"name=paymentMethod"`
    Source CreateTransactionRequestBodySourceEnum `form:"name=source"`
    Status CreateTransactionRequestBodyStatusEnum `form:"name=status"`
    
}

type CreateTransactionSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type CreateTransactionRequest struct {
    Request *CreateTransactionRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateTransactionSecurity 
    
}

type CreateTransactionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Netlicensing *interface{} 
    
}

