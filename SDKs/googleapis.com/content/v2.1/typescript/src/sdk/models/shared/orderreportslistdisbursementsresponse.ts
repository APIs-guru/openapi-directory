import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderReportDisbursement } from "./orderreportdisbursement";



export class OrderreportsListDisbursementsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disbursements", elemType: OrderReportDisbursement })
  disbursements?: OrderReportDisbursement[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
