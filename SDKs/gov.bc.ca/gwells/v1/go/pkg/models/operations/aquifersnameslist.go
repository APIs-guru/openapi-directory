package operations

import (
	"openapi/pkg/models/shared"
)

type AquifersNamesListQueryParams struct {
	Search *string `queryParam:"style=form,explode=true,name=search"`
}

type AquifersNamesListRequest struct {
	QueryParams AquifersNamesListQueryParams
}

type AquifersNamesListResponse struct {
	AquiferSerializerBasics []shared.AquiferSerializerBasic
	ContentType             string
	StatusCode              int64
}
