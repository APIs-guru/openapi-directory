import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderReportTransaction } from "./orderreporttransaction";


export class OrderreportsListTransactionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=transactions", elemType: shared.OrderReportTransaction })
  transactions?: OrderReportTransaction[];
}
