package operations

type UpdateNetworkPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkRequestBody struct {
	EnrollmentString *string  `json:"enrollmentString,omitempty"`
	Name             *string  `json:"name,omitempty"`
	Notes            *string  `json:"notes,omitempty"`
	Tags             []string `json:"tags,omitempty"`
	TimeZone         *string  `json:"timeZone,omitempty"`
}

type UpdateNetworkRequest struct {
	PathParams UpdateNetworkPathParams
	Request    *UpdateNetworkRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkResponse struct {
	ContentType                           string
	StatusCode                            int64
	UpdateNetwork200ApplicationJSONObject map[string]interface{}
}
