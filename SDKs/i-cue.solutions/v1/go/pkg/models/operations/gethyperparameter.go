package operations

import (
	"openapi/pkg/models/shared"
)

type GetHyperparameterHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type GetHyperparameterRequest struct {
	Headers GetHyperparameterHeaders
}

type GetHyperparameterResponse struct {
	Body                []byte
	ContentType         string
	HyperparameterModel *shared.HyperparameterModel
	StatusCode          int64
}
