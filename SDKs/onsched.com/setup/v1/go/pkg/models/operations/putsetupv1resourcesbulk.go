package operations

import (
	"openapi/pkg/models/shared"
)

type PutSetupV1ResourcesBulkQueryParams struct {
	GoogleAuthReturnURL  *string `queryParam:"style=form,explode=true,name=googleAuthReturnUrl"`
	OutlookAuthReturnURL *string `queryParam:"style=form,explode=true,name=outlookAuthReturnUrl"`
}

type PutSetupV1ResourcesBulkRequests struct {
	ResourcesUpdateModel  map[string]interface{} `request:"mediaType=application/*+json"`
	ResourcesUpdateModel1 map[string]interface{} `request:"mediaType=application/json"`
	ResourcesUpdateModel2 map[string]interface{} `request:"mediaType=application/json-patch+json"`
	ResourcesUpdateModel3 map[string]interface{} `request:"mediaType=text/json"`
}

type PutSetupV1ResourcesBulkRequest struct {
	QueryParams PutSetupV1ResourcesBulkQueryParams
	Request     *PutSetupV1ResourcesBulkRequests
}

type PutSetupV1ResourcesBulkResponse struct {
	ContentType        string
	ResourceViewModels []shared.ResourceViewModel
	StatusCode         int64
}
