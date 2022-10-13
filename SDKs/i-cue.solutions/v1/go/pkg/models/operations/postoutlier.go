package operations

import (
	"openapi/pkg/models/shared"
)

type PostOutlierHeaders struct {
	Token *string `header:"name=Token"`
}

type PostOutlierRequests struct {
	OutliersRequest  *shared.OutliersRequest `request:"mediaType=application/*+json"`
	OutliersRequest1 *shared.OutliersRequest `request:"mediaType=application/json"`
	OutliersRequest2 *shared.OutliersRequest `request:"mediaType=text/json"`
}

type PostOutlierRequest struct {
	Headers PostOutlierHeaders
	Request *PostOutlierRequests
}

type PostOutlierResponse struct {
	Body                        []byte
	ContentType                 string
	StatusCode                  int64
	TimeSeriesOutliersResponses []shared.TimeSeriesOutliersResponse
}
