package operations



type LandlordControllerGetInvoicePathParams struct {
    ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
    
}

type LandlordControllerGetInvoiceQueryParams struct {
    InvoiceID string `queryParam:"style=form,explode=true,name=invoiceID"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type LandlordControllerGetInvoiceRequest struct {
    PathParams LandlordControllerGetInvoicePathParams 
    QueryParams LandlordControllerGetInvoiceQueryParams 
    
}

type LandlordControllerGetInvoiceResponse struct {
    Body []byte 
    ContentType string 
    Object map[string]interface{} 
    StatusCode int64 
    
}

