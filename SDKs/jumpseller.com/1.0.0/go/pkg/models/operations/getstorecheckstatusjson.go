package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoreCheckStatusJSONQueryParams struct {
	AuthToken   string  `queryParam:"style=form,explode=true,name=auth_token"`
	Locale      *string `queryParam:"style=form,explode=true,name=locale"`
	PartnerCode string  `queryParam:"style=form,explode=true,name=partner_code"`
	StoreCode   string  `queryParam:"style=form,explode=true,name=store_code"`
}

type GetStoreCheckStatusJSONRequest struct {
	QueryParams GetStoreCheckStatusJSONQueryParams
}

type GetStoreCheckStatusJSONResponse struct {
	ContentType                                    string
	GetStoreCheckStatusJSON200ApplicationJSONOneOf *interface{}
	PartnerError                                   *shared.PartnerError
	StatusCode                                     int64
}
