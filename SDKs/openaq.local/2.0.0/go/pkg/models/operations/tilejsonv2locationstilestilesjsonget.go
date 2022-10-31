package operations

import (
	"openapi/pkg/models/shared"
)

type TilejsonV2LocationsTilesTilesJSONGetResponse struct {
	ContentType string
	StatusCode  int64
	TileJSON    *shared.TileJSON
}
