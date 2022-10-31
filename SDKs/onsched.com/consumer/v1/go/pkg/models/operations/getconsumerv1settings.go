package operations

import (
	"openapi/pkg/models/shared"
)

type GetConsumerV1SettingsQueryParams struct {
	LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
}

type GetConsumerV1SettingsRequest struct {
	QueryParams GetConsumerV1SettingsQueryParams
}

type GetConsumerV1SettingsResponse struct {
	ContentType             string
	OnlineSettingsViewModel *shared.OnlineSettingsViewModel
	StatusCode              int64
}
