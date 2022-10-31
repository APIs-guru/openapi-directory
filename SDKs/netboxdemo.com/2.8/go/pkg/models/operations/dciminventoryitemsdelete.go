package operations

type DcimInventoryItemsDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimInventoryItemsDeleteRequest struct {
	PathParams DcimInventoryItemsDeletePathParams
}

type DcimInventoryItemsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
