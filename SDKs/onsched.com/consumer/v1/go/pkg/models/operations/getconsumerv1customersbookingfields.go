package operations

import (
"openapi/pkg/models/shared")

type GetConsumerV1CustomersBookingfieldsQueryParams struct {
    LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
    
}

type GetConsumerV1CustomersBookingfieldsRequest struct {
    QueryParams GetConsumerV1CustomersBookingfieldsQueryParams 
    
}

type GetConsumerV1CustomersBookingfieldsResponse struct {
    BookingFieldListViewModel *shared.BookingFieldListViewModel 
    ContentType string 
    StatusCode int64 
    
}

