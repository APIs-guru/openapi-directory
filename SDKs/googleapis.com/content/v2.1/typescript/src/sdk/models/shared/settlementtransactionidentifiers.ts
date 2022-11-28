import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SettlementTransactionIdentifiers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adjustmentId" })
  adjustmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderItemId" })
  orderItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=settlementEntryId" })
  settlementEntryId?: string;

  @SpeakeasyMetadata({ data: "json, name=shipmentIds" })
  shipmentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
