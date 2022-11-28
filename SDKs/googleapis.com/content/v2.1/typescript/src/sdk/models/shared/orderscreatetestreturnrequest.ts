import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrdersCustomBatchRequestEntryCreateTestReturnReturnItem } from "./orderscustombatchrequestentrycreatetestreturnreturnitem";



export class OrdersCreateTestReturnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: OrdersCustomBatchRequestEntryCreateTestReturnReturnItem })
  items?: OrdersCustomBatchRequestEntryCreateTestReturnReturnItem[];
}
