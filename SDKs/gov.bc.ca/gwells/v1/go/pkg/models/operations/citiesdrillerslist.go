package operations

import (
	"openapi/pkg/models/shared"
)

type CitiesDrillersListResponse struct {
	CityLists   []shared.CityList
	ContentType string
	StatusCode  int64
}
