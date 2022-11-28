import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CancelLeaseRequestResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
/**
 * Request message for canceling a lease using CancelLease.
**/
export declare class CancelLeaseRequest extends SpeakeasyBase {
    responseView?: CancelLeaseRequestResponseViewEnum;
    scheduleTime?: string;
}
