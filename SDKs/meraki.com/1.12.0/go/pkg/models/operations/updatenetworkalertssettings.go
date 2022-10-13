package operations

type UpdateNetworkAlertsSettingsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations struct {
	AllAdmins     *bool    `json:"allAdmins"`
	Emails        []string `json:"emails"`
	HTTPServerIds []string `json:"httpServerIds"`
	Snmp          *bool    `json:"snmp"`
}

type UpdateNetworkAlertsSettingsRequestBodyAlerts struct {
	AlertDestinations *UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations `json:"alertDestinations"`
	Enabled           *bool                                                          `json:"enabled"`
	Filters           map[string]interface{}                                         `json:"filters"`
	Type              string                                                         `json:"type"`
}

type UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations struct {
	AllAdmins     *bool    `json:"allAdmins"`
	Emails        []string `json:"emails"`
	HTTPServerIds []string `json:"httpServerIds"`
	Snmp          *bool    `json:"snmp"`
}

type UpdateNetworkAlertsSettingsRequestBody struct {
	Alerts              []UpdateNetworkAlertsSettingsRequestBodyAlerts             `json:"alerts"`
	DefaultDestinations *UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations `json:"defaultDestinations"`
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
