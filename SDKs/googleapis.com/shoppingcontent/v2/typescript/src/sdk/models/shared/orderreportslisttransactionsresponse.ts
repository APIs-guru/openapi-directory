import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderReportTransaction } from "./orderreporttransaction";



export class OrderreportsListTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: OrderReportTransaction })
  transactions?: OrderReportTransaction[];
}
