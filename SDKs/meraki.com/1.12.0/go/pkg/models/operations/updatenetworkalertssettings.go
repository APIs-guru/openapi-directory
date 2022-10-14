package operations

type UpdateNetworkAlertsSettingsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations struct {
	AllAdmins     *bool    `json:"allAdmins,omitempty"`
	Emails        []string `json:"emails,omitempty"`
	HTTPServerIds []string `json:"httpServerIds,omitempty"`
	Snmp          *bool    `json:"snmp,omitempty"`
}

type UpdateNetworkAlertsSettingsRequestBodyAlerts struct {
	AlertDestinations *UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations `json:"alertDestinations,omitempty"`
	Enabled           *bool                                                          `json:"enabled,omitempty"`
	Filters           map[string]interface{}                                         `json:"filters,omitempty"`
	Type              string                                                         `json:"type"`
}

type UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations struct {
	AllAdmins     *bool    `json:"allAdmins,omitempty"`
	Emails        []string `json:"emails,omitempty"`
	HTTPServerIds []string `json:"httpServerIds,omitempty"`
	Snmp          *bool    `json:"snmp,omitempty"`
}

type UpdateNetworkAlertsSettingsRequestBody struct {
	Alerts              []UpdateNetworkAlertsSettingsRequestBodyAlerts             `json:"alerts,omitempty"`
	DefaultDestinations *UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations `json:"defaultDestinations,omitempty"`
}

type UpdateNetworkAlertsSettingsRequest struct {
	PathParams UpdateNetworkAlertsSettingsPathParams
	Request    *UpdateNetworkAlertsSettingsRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkAlertsSettingsResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	UpdateNetworkAlertsSettings200ApplicationJSONObject map[string]interface{}
}
