import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RenewLeaseRequestResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
/**
 * Request message for renewing a lease using RenewLease.
**/
export declare class RenewLeaseRequest extends SpeakeasyBase {
    leaseDuration?: string;
    responseView?: RenewLeaseRequestResponseViewEnum;
    scheduleTime?: string;
}
