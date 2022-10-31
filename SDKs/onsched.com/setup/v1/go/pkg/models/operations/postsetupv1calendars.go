package operations

import (
"openapi/pkg/models/shared")

type PostSetupV1CalendarsRequests struct {
    ScheduleInputModel *shared.ScheduleInputModel `request:"mediaType=application/*+json"`
    ScheduleInputModel1 *shared.ScheduleInputModel `request:"mediaType=application/json"`
    ScheduleInputModel2 *shared.ScheduleInputModel `request:"mediaType=application/json-patch+json"`
    ScheduleInputModel3 *shared.ScheduleInputModel `request:"mediaType=text/json"`
    
}

type PostSetupV1CalendarsRequest struct {
    Request *PostSetupV1CalendarsRequests 
    
}

type PostSetupV1CalendarsResponse struct {
    ContentType string 
    ScheduleViewModel *shared.ScheduleViewModel 
    StatusCode int64 
    
}

