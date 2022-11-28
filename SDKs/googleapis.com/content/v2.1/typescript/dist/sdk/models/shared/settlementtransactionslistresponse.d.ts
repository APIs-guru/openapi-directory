import { SpeakeasyBase } from "../../../internal/utils";
import { SettlementTransaction } from "./settlementtransaction";
export declare class SettlementtransactionsListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    resources?: SettlementTransaction[];
}
