package operations

import (
"openapi/pkg/models/shared")

type GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    OutlookEmailAddress string `pathParam:"style=simple,explode=false,name=outlookEmailAddress"`
    
}

type GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressQueryParams struct {
    OutlookAuthReturnURL *string `queryParam:"style=form,explode=true,name=outlookAuthReturnUrl"`
    
}

type GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressRequest struct {
    PathParams GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressPathParams 
    QueryParams GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressQueryParams 
    
}

type GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressResponse struct {
    CalendarAuthViewModel *shared.CalendarAuthViewModel 
    ContentType string 
    StatusCode int64 
    
}

