package shared

// DuplicateLineItemRequest
// Request message for LineItemService.DuplicateLineItem.
type DuplicateLineItemRequest struct {
	TargetDisplayName *string `json:"targetDisplayName,omitempty"`
}
