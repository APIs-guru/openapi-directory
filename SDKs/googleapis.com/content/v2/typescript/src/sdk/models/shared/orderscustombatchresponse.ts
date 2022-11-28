import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrdersCustomBatchResponseEntry } from "./orderscustombatchresponseentry";



export class OrdersCustomBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: OrdersCustomBatchResponseEntry })
  entries?: OrdersCustomBatchResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
