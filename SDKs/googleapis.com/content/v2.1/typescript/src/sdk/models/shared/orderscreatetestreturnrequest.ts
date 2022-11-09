import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrdersCustomBatchRequestEntryCreateTestReturnReturnItem } from "./orderscustombatchrequestentrycreatetestreturnreturnitem";


export class OrdersCreateTestReturnRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem })
  items?: OrdersCustomBatchRequestEntryCreateTestReturnReturnItem[];
}
