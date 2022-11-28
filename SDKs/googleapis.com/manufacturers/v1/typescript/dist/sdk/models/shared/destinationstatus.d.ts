import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DestinationStatusStatusEnum {
    Unknown = "UNKNOWN",
    Active = "ACTIVE",
    Pending = "PENDING",
    Disapproved = "DISAPPROVED"
}
/**
 * The destination status.
**/
export declare class DestinationStatus extends SpeakeasyBase {
    destination?: string;
    status?: DestinationStatusStatusEnum;
}
