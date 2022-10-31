package operations

import (
"openapi/pkg/models/shared")

type GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressPathParams struct {
    GoogleEmailAddress string `pathParam:"style=simple,explode=false,name=googleEmailAddress"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressQueryParams struct {
    GoogleAuthReturnURL *string `queryParam:"style=form,explode=true,name=googleAuthReturnUrl"`
    
}

type GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressRequest struct {
    PathParams GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressPathParams 
    QueryParams GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressQueryParams 
    
}

type GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressResponse struct {
    CalendarAuthViewModel *shared.CalendarAuthViewModel 
    ContentType string 
    StatusCode int64 
    
}

