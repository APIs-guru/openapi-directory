package operations

import (
"openapi/pkg/models/shared")
var CreateFirewallDeviceServers = []string{
	"https://api.linode.com/v4",
}

type CreateFirewallDevicePathParams struct {
    FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
    
}


type CreateFirewallDeviceRequestBodyTypeEnum string

const (
    CreateFirewallDeviceRequestBodyTypeEnumLinode CreateFirewallDeviceRequestBodyTypeEnum = "linode"
)


type CreateFirewallDeviceRequestBody struct {
    ID int64 `json:"id"`
    Label *string `json:"label,omitempty"`
    Type CreateFirewallDeviceRequestBodyTypeEnum `json:"type"`
    URL *string `json:"url,omitempty"`
    
}

type CreateFirewallDeviceSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CreateFirewallDeviceSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreateFirewallDeviceSecurity struct {
    Option1 *CreateFirewallDeviceSecurityOption1 `security:"option"`
    Option2 *CreateFirewallDeviceSecurityOption2 `security:"option"`
    
}

type CreateFirewallDeviceRequest struct {
    ServerURL *string 
    PathParams CreateFirewallDevicePathParams 
    Request *CreateFirewallDeviceRequestBody `request:"mediaType=application/json"`
    Security CreateFirewallDeviceSecurity 
    
}

type CreateFirewallDeviceDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type CreateFirewallDeviceResponse struct {
    ContentType string 
    FirewallDevices *shared.FirewallDevices 
    StatusCode int64 
    CreateFirewallDeviceDefaultApplicationJSONObject *CreateFirewallDeviceDefaultApplicationJSON 
    
}

