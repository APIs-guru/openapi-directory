import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrdersCustomBatchRequestEntryCreateTestReturnReturnItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;
}
