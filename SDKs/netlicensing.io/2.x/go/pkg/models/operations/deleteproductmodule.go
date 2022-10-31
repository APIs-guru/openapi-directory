package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProductModulePathParams struct {
	ProductModuleNumber string `pathParam:"style=simple,explode=false,name=productModuleNumber"`
}

type DeleteProductModuleQueryParams struct {
	ForceCascade *bool `queryParam:"style=form,explode=true,name=forceCascade"`
}

type DeleteProductModuleSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type DeleteProductModuleRequest struct {
	PathParams  DeleteProductModulePathParams
	QueryParams DeleteProductModuleQueryParams
	Security    DeleteProductModuleSecurity
}

type DeleteProductModuleResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Netlicensing *interface{}
}
