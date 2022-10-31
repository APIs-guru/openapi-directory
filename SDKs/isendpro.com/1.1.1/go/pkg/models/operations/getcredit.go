package operations

import (
"openapi/pkg/models/shared")


type GetCreditCreditEnum string

const (
    GetCreditCreditEnumOne GetCreditCreditEnum = "1"
GetCreditCreditEnumTwo GetCreditCreditEnum = "2"
)


type GetCreditQueryParams struct {
    Credit GetCreditCreditEnum `queryParam:"style=form,explode=true,name=credit"`
    Keyid string `queryParam:"style=form,explode=true,name=keyid"`
    
}

type GetCreditRequest struct {
    QueryParams GetCreditQueryParams 
    
}

type GetCreditResponse struct {
    ContentType string 
    CreditResponse *shared.CreditResponse 
    Erreur *shared.Erreur 
    StatusCode int64 
    
}

