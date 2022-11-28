import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InsuranceNetworkStateEnum {
    NetworkStateUnspecified = "NETWORK_STATE_UNSPECIFIED",
    Accepted = "ACCEPTED",
    PendingAdd = "PENDING_ADD",
    PendingDelete = "PENDING_DELETE",
    NotAccepted = "NOT_ACCEPTED"
}
/**
 * A single insurance network. Next id: 5
**/
export declare class InsuranceNetwork extends SpeakeasyBase {
    networkId?: string;
    networkNames?: Map<string, string>;
    payerNames?: Map<string, string>;
    state?: InsuranceNetworkStateEnum;
}
