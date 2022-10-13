package operations

type UpdateNetworkPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkRequestBody struct {
	EnrollmentString *string  `json:"enrollmentString"`
	Name             *string  `json:"name"`
	Notes            *string  `json:"notes"`
	Tags             []string `json:"tags"`
	TimeZone         *string  `json:"timeZone"`
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
