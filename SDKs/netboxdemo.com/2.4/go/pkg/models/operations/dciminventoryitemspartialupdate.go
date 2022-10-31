package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInventoryItemsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimInventoryItemsPartialUpdateRequest struct {
	PathParams DcimInventoryItemsPartialUpdatePathParams
	Request    shared.WritableInventoryItem `request:"mediaType=application/json"`
}

type DcimInventoryItemsPartialUpdateResponse struct {
	ContentType   string
	InventoryItem *shared.InventoryItem
	StatusCode    int64
}
