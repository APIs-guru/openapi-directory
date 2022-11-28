package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInventoryItemsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimInventoryItemsUpdateRequest struct {
	PathParams DcimInventoryItemsUpdatePathParams
	Request    shared.WritableInventoryItemInput `request:"mediaType=application/json"`
}

type DcimInventoryItemsUpdateResponse struct {
	ContentType   string
	InventoryItem *shared.InventoryItem
	StatusCode    int64
}
