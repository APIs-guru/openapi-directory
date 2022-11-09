import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrdersRefundItemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionStatus" })
  executionStatus?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
