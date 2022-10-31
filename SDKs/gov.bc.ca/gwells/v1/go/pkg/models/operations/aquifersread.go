package operations

import (
	"openapi/pkg/models/shared"
)

type AquifersReadPathParams struct {
	AquiferID int64 `pathParam:"style=simple,explode=false,name=aquifer_id"`
}

type AquifersReadRequest struct {
	PathParams AquifersReadPathParams
}

type AquifersReadResponse struct {
	Aquifer     *shared.Aquifer
	ContentType string
	StatusCode  int64
}
