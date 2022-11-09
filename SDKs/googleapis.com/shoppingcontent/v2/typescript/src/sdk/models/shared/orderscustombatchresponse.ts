import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrdersCustomBatchResponseEntry } from "./orderscustombatchresponseentry";


export class OrdersCustomBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.OrdersCustomBatchResponseEntry })
  entries?: OrdersCustomBatchResponseEntry[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
