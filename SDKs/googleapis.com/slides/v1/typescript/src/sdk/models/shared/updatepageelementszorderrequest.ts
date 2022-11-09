import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UpdatePageElementsZOrderRequestOperationEnum {
    ZOrderOperationUnspecified = "Z_ORDER_OPERATION_UNSPECIFIED"
,    BringToFront = "BRING_TO_FRONT"
,    BringForward = "BRING_FORWARD"
,    SendBackward = "SEND_BACKWARD"
,    SendToBack = "SEND_TO_BACK"
}


// UpdatePageElementsZOrderRequest
/** 
 * Updates the Z-order of page elements. Z-order is an ordering of the elements on the page from back to front. The page element in the front may cover the elements that are behind it.
**/
export class UpdatePageElementsZOrderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=operation" })
  operation?: UpdatePageElementsZOrderRequestOperationEnum;

  @Metadata({ data: "json, name=pageElementObjectIds" })
  pageElementObjectIds?: string[];
}
