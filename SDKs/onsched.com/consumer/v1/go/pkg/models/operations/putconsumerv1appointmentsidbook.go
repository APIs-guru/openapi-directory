package operations

import (
"openapi/pkg/models/shared")

type PutConsumerV1AppointmentsIDBookPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutConsumerV1AppointmentsIDBookRequests struct {
    AppointmentBookModel *shared.AppointmentBookModel `request:"mediaType=application/*+json"`
    AppointmentBookModel1 *shared.AppointmentBookModel `request:"mediaType=application/json"`
    AppointmentBookModel2 *shared.AppointmentBookModel `request:"mediaType=application/json-patch+json"`
    AppointmentBookModel3 *shared.AppointmentBookModel `request:"mediaType=text/json"`
    
}

type PutConsumerV1AppointmentsIDBookRequest struct {
    PathParams PutConsumerV1AppointmentsIDBookPathParams 
    Request *PutConsumerV1AppointmentsIDBookRequests 
    
}

type PutConsumerV1AppointmentsIDBookResponse struct {
    AppointmentViewModel *shared.AppointmentViewModel 
    ContentType string 
    StatusCode int64 
    
}

