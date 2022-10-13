package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupV1ResourcesBulkQueryParams struct {
	GoogleAuthReturnURL  *string `queryParam:"style=form,explode=true,name=googleAuthReturnUrl"`
	OutlookAuthReturnURL *string `queryParam:"style=form,explode=true,name=outlookAuthReturnUrl"`
}

type PostSetupV1ResourcesBulkRequests struct {
	ResourcesInputModel  map[string]interface{} `request:"mediaType=application/*+json"`
	ResourcesInputModel1 map[string]interface{} `request:"mediaType=application/json"`
	ResourcesInputModel2 map[string]interface{} `request:"mediaType=application/json-patch+json"`
	ResourcesInputModel3 map[string]interface{} `request:"mediaType=text/json"`
}

type PostSetupV1ResourcesBulkRequest struct {
	QueryParams PostSetupV1ResourcesBulkQueryParams
	Request     *PostSetupV1ResourcesBulkRequests
}

type PostSetupV1ResourcesBulkResponse struct {
	ContentType        string
	ResourceViewModels []shared.ResourceViewModel
	StatusCode         int64
}
