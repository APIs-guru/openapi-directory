import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderReportDisbursement } from "./orderreportdisbursement";


export class OrderreportsListDisbursementsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=disbursements", elemType: shared.OrderReportDisbursement })
  disbursements?: OrderReportDisbursement[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
