import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SettlementTransactionIdentifiers extends SpeakeasyBase {
  @Metadata({ data: "json, name=adjustmentId" })
  adjustmentId?: string;

  @Metadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @Metadata({ data: "json, name=orderItemId" })
  orderItemId?: string;

  @Metadata({ data: "json, name=settlementEntryId" })
  settlementEntryId?: string;

  @Metadata({ data: "json, name=shipmentIds" })
  shipmentIds?: string[];

  @Metadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
