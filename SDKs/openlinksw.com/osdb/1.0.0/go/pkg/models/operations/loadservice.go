package operations

import (
	"openapi/pkg/models/shared"
)

type LoadServiceRequestBody struct {
	ServiceDescriptionURL string  `json:"service_description_url"`
	ServiceMoniker        *string `json:"service_moniker,omitempty"`
}

type LoadService200ApplicationJSONStatusEnum string

const (
	LoadService200ApplicationJSONStatusEnumSuccess LoadService200ApplicationJSONStatusEnum = "success"
)

type LoadService200ApplicationJSON struct {
	API      string                                  `json:"api"`
	Method   string                                  `json:"method"`
	Response string                                  `json:"response"`
	Status   LoadService200ApplicationJSONStatusEnum `json:"status"`
}

type LoadServiceRequest struct {
	Request *LoadServiceRequestBody `request:"mediaType=application/json"`
}

type LoadServiceResponse struct {
	ContentType                         string
	ErrorModel                          *shared.ErrorModel
	StatusCode                          int64
	LoadService200ApplicationJSONObject *LoadService200ApplicationJSON
}
