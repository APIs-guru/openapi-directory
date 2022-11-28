import { SpeakeasyBase } from "../../../internal/utils";
import { SettlementReport } from "./settlementreport";
export declare class SettlementreportsListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    resources?: SettlementReport[];
}
