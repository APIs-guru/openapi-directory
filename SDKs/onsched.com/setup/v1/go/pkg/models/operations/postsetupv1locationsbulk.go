package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupV1LocationsBulkRequests struct {
	LocationsInputModel  map[string]interface{} `request:"mediaType=application/*+json"`
	LocationsInputModel1 map[string]interface{} `request:"mediaType=application/json"`
	LocationsInputModel2 map[string]interface{} `request:"mediaType=application/json-patch+json"`
	LocationsInputModel3 map[string]interface{} `request:"mediaType=text/json"`
}

type PostSetupV1LocationsBulkRequest struct {
	Request *PostSetupV1LocationsBulkRequests
}

type PostSetupV1LocationsBulkResponse struct {
	ContentType        string
	LocationViewModels []shared.LocationViewModel
	StatusCode         int64
}
