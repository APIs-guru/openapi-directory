import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UpdatePageElementsZOrderRequestOperationEnum {
    ZOrderOperationUnspecified = "Z_ORDER_OPERATION_UNSPECIFIED",
    BringToFront = "BRING_TO_FRONT",
    BringForward = "BRING_FORWARD",
    SendBackward = "SEND_BACKWARD",
    SendToBack = "SEND_TO_BACK"
}
/**
 * Updates the Z-order of page elements. Z-order is an ordering of the elements on the page from back to front. The page element in the front may cover the elements that are behind it.
**/
export declare class UpdatePageElementsZOrderRequest extends SpeakeasyBase {
    operation?: UpdatePageElementsZOrderRequestOperationEnum;
    pageElementObjectIds?: string[];
}
