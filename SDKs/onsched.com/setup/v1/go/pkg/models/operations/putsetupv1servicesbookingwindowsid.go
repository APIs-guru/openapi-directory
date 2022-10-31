package operations

import (
"openapi/pkg/models/shared")

type PutSetupV1ServicesBookingwindowsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutSetupV1ServicesBookingwindowsIDRequests struct {
    BookingWindowUpdateModel *shared.BookingWindowUpdateModel `request:"mediaType=application/*+json"`
    BookingWindowUpdateModel1 *shared.BookingWindowUpdateModel `request:"mediaType=application/json"`
    BookingWindowUpdateModel2 *shared.BookingWindowUpdateModel `request:"mediaType=application/json-patch+json"`
    BookingWindowUpdateModel3 *shared.BookingWindowUpdateModel `request:"mediaType=text/json"`
    
}

type PutSetupV1ServicesBookingwindowsIDRequest struct {
    PathParams PutSetupV1ServicesBookingwindowsIDPathParams 
    Request *PutSetupV1ServicesBookingwindowsIDRequests 
    
}

type PutSetupV1ServicesBookingwindowsIDResponse struct {
    BookingWindowViewModel *shared.BookingWindowViewModel 
    ContentType string 
    StatusCode int64 
    
}

