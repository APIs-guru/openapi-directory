import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrdersCustomBatchRequestEntry } from "./orderscustombatchrequestentry";



export class OrdersCustomBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: OrdersCustomBatchRequestEntry })
  entries?: OrdersCustomBatchRequestEntry[];
}
