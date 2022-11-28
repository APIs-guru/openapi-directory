import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A collection of the services to include in this transfer request, separated by type.
 *
**/
export declare class ServiceTransferEntities extends SpeakeasyBase {
    linodes?: number[];
}
export declare enum ServiceTransferStatusEnum {
    Accepted = "accepted",
    Cancelled = "cancelled",
    Completed = "completed",
    Failed = "failed",
    Pending = "pending",
    Stale = "stale"
}
/**
 * An object representing a Service Transfer.
 *
**/
export declare class ServiceTransfer extends SpeakeasyBase {
    created?: Date;
    entities?: ServiceTransferEntities;
    expiry?: Date;
    isSender?: boolean;
    status?: ServiceTransferStatusEnum;
    token?: string;
    updated?: Date;
}
