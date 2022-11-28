package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInventoryItemsCreateRequest struct {
	Request shared.WritableInventoryItemInput `request:"mediaType=application/json"`
}

type DcimInventoryItemsCreateResponse struct {
	ContentType   string
	InventoryItem *shared.InventoryItem
	StatusCode    int64
}
