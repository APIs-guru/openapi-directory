import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";


export class InvoiceSummaryAdditionalChargeSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=totalAmount" })
  totalAmount?: Amount;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
