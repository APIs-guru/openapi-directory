import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Errors } from "./errors";
import { Order } from "./order";


export class OrdersCustomBatchResponseEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=errors" })
  errors?: Errors;

  @Metadata({ data: "json, name=executionStatus" })
  executionStatus?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=order" })
  order?: Order;
}
