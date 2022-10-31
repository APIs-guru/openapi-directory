package operations

import (
"openapi/pkg/models/shared")

type PostSetupV1ServicesBookingwindowsRequests struct {
    BookingWindowInputModel *shared.BookingWindowInputModel `request:"mediaType=application/*+json"`
    BookingWindowInputModel1 *shared.BookingWindowInputModel `request:"mediaType=application/json"`
    BookingWindowInputModel2 *shared.BookingWindowInputModel `request:"mediaType=application/json-patch+json"`
    BookingWindowInputModel3 *shared.BookingWindowInputModel `request:"mediaType=text/json"`
    
}

type PostSetupV1ServicesBookingwindowsRequest struct {
    Request *PostSetupV1ServicesBookingwindowsRequests 
    
}

type PostSetupV1ServicesBookingwindowsResponse struct {
    BookingWindowViewModel *shared.BookingWindowViewModel 
    ContentType string 
    StatusCode int64 
    
}

