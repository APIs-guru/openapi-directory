package shared

type UpdatePageElementsZOrderRequestOperationEnum string

const (
	UpdatePageElementsZOrderRequestOperationEnumZOrderOperationUnspecified UpdatePageElementsZOrderRequestOperationEnum = "Z_ORDER_OPERATION_UNSPECIFIED"
	UpdatePageElementsZOrderRequestOperationEnumBringToFront               UpdatePageElementsZOrderRequestOperationEnum = "BRING_TO_FRONT"
	UpdatePageElementsZOrderRequestOperationEnumBringForward               UpdatePageElementsZOrderRequestOperationEnum = "BRING_FORWARD"
	UpdatePageElementsZOrderRequestOperationEnumSendBackward               UpdatePageElementsZOrderRequestOperationEnum = "SEND_BACKWARD"
	UpdatePageElementsZOrderRequestOperationEnumSendToBack                 UpdatePageElementsZOrderRequestOperationEnum = "SEND_TO_BACK"
)

// UpdatePageElementsZOrderRequest
// Updates the Z-order of page elements. Z-order is an ordering of the elements on the page from back to front. The page element in the front may cover the elements that are behind it.
type UpdatePageElementsZOrderRequest struct {
	Operation            *UpdatePageElementsZOrderRequestOperationEnum `json:"operation,omitempty"`
	PageElementObjectIds []string                                      `json:"pageElementObjectIds,omitempty"`
}
