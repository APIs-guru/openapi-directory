import { SpeakeasyBase } from "../../../internal/utils";
import { OrderReportDisbursement } from "./orderreportdisbursement";
export declare class OrderreportsListDisbursementsResponse extends SpeakeasyBase {
    disbursements?: OrderReportDisbursement[];
    kind?: string;
    nextPageToken?: string;
}
