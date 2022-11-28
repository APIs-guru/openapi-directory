import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



export class InvoiceSummaryAdditionalChargeSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
