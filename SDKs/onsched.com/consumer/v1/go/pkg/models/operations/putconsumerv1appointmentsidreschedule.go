package operations

import (
"openapi/pkg/models/shared")

type PutConsumerV1AppointmentsIDReschedulePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutConsumerV1AppointmentsIDRescheduleRequests struct {
    AppointmentRescheduleModel *shared.AppointmentRescheduleModel `request:"mediaType=application/*+json"`
    AppointmentRescheduleModel1 *shared.AppointmentRescheduleModel `request:"mediaType=application/json"`
    AppointmentRescheduleModel2 *shared.AppointmentRescheduleModel `request:"mediaType=application/json-patch+json"`
    AppointmentRescheduleModel3 *shared.AppointmentRescheduleModel `request:"mediaType=text/json"`
    
}

type PutConsumerV1AppointmentsIDRescheduleRequest struct {
    PathParams PutConsumerV1AppointmentsIDReschedulePathParams 
    Request *PutConsumerV1AppointmentsIDRescheduleRequests 
    
}

type PutConsumerV1AppointmentsIDRescheduleResponse struct {
    AppointmentViewModel *shared.AppointmentViewModel 
    ContentType string 
    StatusCode int64 
    
}

