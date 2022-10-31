package shared




type UpdatePageElementsZOrderRequestOperationEnum string

const (
    UpdatePageElementsZOrderRequestOperationEnumZOrderOperationUnspecified UpdatePageElementsZOrderRequestOperationEnum = "Z_ORDER_OPERATION_UNSPECIFIED"
UpdatePageElementsZOrderRequestOperationEnumBringToFront UpdatePageElementsZOrderRequestOperationEnum = "BRING_TO_FRONT"
UpdatePageElementsZOrderRequestOperationEnumBringForward UpdatePageElementsZOrderRequestOperationEnum = "BRING_FORWARD"
UpdatePageElementsZOrderRequestOperationEnumSendBackward UpdatePageElementsZOrderRequestOperationEnum = "SEND_BACKWARD"
UpdatePageElementsZOrderRequestOperationEnumSendToBack UpdatePageElementsZOrderRequestOperationEnum = "SEND_TO_BACK"
)


type UpdatePageElementsZOrderRequest struct {
    Operation *UpdatePageElementsZOrderRequestOperationEnum `json:"operation,omitempty"`
    PageElementObjectIds []string `json:"pageElementObjectIds,omitempty"`
    
}

