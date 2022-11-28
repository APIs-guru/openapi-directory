import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A collection of the entities to include in this transfer request, separated by type.
 *
**/
export declare class EntityTransferEntities extends SpeakeasyBase {
    linodes?: number[];
}
export declare enum EntityTransferStatusEnum {
    Accepted = "accepted",
    Cancelled = "cancelled",
    Completed = "completed",
    Failed = "failed",
    Pending = "pending",
    Stale = "stale"
}
/**
 * An object representing an Entity Transfer.
 *
**/
export declare class EntityTransfer extends SpeakeasyBase {
    created?: Date;
    entities?: EntityTransferEntities;
    expiry?: Date;
    isSender?: boolean;
    status?: EntityTransferStatusEnum;
    token?: string;
    updated?: Date;
}
