import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrdersCustomBatchRequestEntry } from "./orderscustombatchrequestentry";


export class OrdersCustomBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.OrdersCustomBatchRequestEntry })
  entries?: OrdersCustomBatchRequestEntry[];
}
