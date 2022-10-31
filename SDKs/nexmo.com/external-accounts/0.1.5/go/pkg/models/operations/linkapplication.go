package operations

import (
"openapi/pkg/models/shared")


type LinkApplicationProviderEnum string

const (
    LinkApplicationProviderEnumMessenger LinkApplicationProviderEnum = "messenger"
LinkApplicationProviderEnumViberServiceMsg LinkApplicationProviderEnum = "viber_service_msg"
LinkApplicationProviderEnumWhatsapp LinkApplicationProviderEnum = "whatsapp"
)


type LinkApplicationPathParams struct {
    ExternalID string `pathParam:"style=simple,explode=false,name=external_id"`
    Provider LinkApplicationProviderEnum `pathParam:"style=simple,explode=false,name=provider"`
    
}

type LinkApplicationRequestBody struct {
    Application string `json:"application"`
    
}

type LinkApplicationSecurityOption1 struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type LinkApplicationSecurityOption2 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type LinkApplicationSecurity struct {
    Option1 *LinkApplicationSecurityOption1 `security:"option"`
    Option2 *LinkApplicationSecurityOption2 `security:"option"`
    
}

type LinkApplicationRequest struct {
    PathParams LinkApplicationPathParams 
    Request LinkApplicationRequestBody `request:"mediaType=application/json"`
    Security LinkApplicationSecurity 
    
}

type LinkApplication403ApplicationJSON struct {
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type LinkApplication409ApplicationJSON struct {
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type LinkApplicationResponse struct {
    FourHundredAndOneResponse *shared.FourHundredAndOneResponse 
    AccountResponse *shared.AccountResponse 
    ContentType string 
    LinkApplication403ApplicationJSONObject *LinkApplication403ApplicationJSON 
    LinkApplication409ApplicationJSONObject *LinkApplication409ApplicationJSON 
    StatusCode int64 
    
}

