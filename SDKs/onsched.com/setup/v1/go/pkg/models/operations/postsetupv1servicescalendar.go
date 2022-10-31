package operations

import (
"openapi/pkg/models/shared")

type PostSetupV1ServicesCalendarRequests struct {
    ServiceCalendarInputModel *shared.ServiceCalendarInputModel `request:"mediaType=application/*+json"`
    ServiceCalendarInputModel1 *shared.ServiceCalendarInputModel `request:"mediaType=application/json"`
    ServiceCalendarInputModel2 *shared.ServiceCalendarInputModel `request:"mediaType=application/json-patch+json"`
    ServiceCalendarInputModel3 *shared.ServiceCalendarInputModel `request:"mediaType=text/json"`
    
}

type PostSetupV1ServicesCalendarRequest struct {
    Request *PostSetupV1ServicesCalendarRequests 
    
}

type PostSetupV1ServicesCalendarResponse struct {
    ContentType string 
    ServiceCalendarViewModel *shared.ServiceCalendarViewModel 
    StatusCode int64 
    
}

