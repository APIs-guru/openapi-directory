package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProductPathParams struct {
	ProductNumber string `pathParam:"style=simple,explode=false,name=productNumber"`
}

type DeleteProductQueryParams struct {
	ForceCascade *bool `queryParam:"style=form,explode=true,name=forceCascade"`
}

type DeleteProductSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type DeleteProductRequest struct {
	PathParams  DeleteProductPathParams
	QueryParams DeleteProductQueryParams
	Security    DeleteProductSecurity
}

type DeleteProductResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Netlicensing *interface{}
}
