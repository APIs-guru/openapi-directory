package operations

import (
	"openapi/pkg/models/shared"
)

type PostStoreCreateJSONQueryParams struct {
	AuthToken   string `queryParam:"style=form,explode=true,name=auth_token"`
	PartnerCode string `queryParam:"style=form,explode=true,name=partner_code"`
}

type PostStoreCreateJSONRequest struct {
	QueryParams PostStoreCreateJSONQueryParams
	Request     shared.PartnerStoreCreate `request:"mediaType=application/json"`
}

type PostStoreCreateJSONResponse struct {
	ContentType      string
	PartnerError     *shared.PartnerError
	PartnerStoreCode *shared.PartnerStoreCode
	StatusCode       int64
}
