package operations

import (
"openapi/pkg/models/shared")

type GetUsersUserEmailOfferingsOfferingIDProgressPathParams struct {
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    UserEmail string `pathParam:"style=simple,explode=false,name=userEmail"`
    
}

type GetUsersUserEmailOfferingsOfferingIDProgressRequest struct {
    PathParams GetUsersUserEmailOfferingsOfferingIDProgressPathParams 
    
}

type GetUsersUserEmailOfferingsOfferingIDProgress200ApplicationJSON struct {
    Completion *string `json:"completion,omitempty"`
    Email *string `json:"email,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    ID *string `json:"id,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    
}

type GetUsersUserEmailOfferingsOfferingIDProgressResponse struct {
    ContentType string 
    Error *shared.Error 
    GetUsersUserEmailOfferingsOfferingIDProgress200ApplicationJSONObject *GetUsersUserEmailOfferingsOfferingIDProgress200ApplicationJSON 
    StatusCode int64 
    
}

