import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrdersUpdateLineItemShippingDetailsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionStatus" })
  executionStatus?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
