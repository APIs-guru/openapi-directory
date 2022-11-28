import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EntityTransferEntities
/** 
 * A collection of the entities to include in this transfer request, separated by type.
 * 
**/
export class EntityTransferEntities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linodes" })
  linodes?: number[];
}

export enum EntityTransferStatusEnum {
    Accepted = "accepted",
    Cancelled = "cancelled",
    Completed = "completed",
    Failed = "failed",
    Pending = "pending",
    Stale = "stale"
}


// EntityTransfer
/** 
 * An object representing an Entity Transfer.
 * 
**/
export class EntityTransfer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=entities" })
  entities?: EntityTransferEntities;

  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry?: Date;

  @SpeakeasyMetadata({ data: "json, name=is_sender" })
  isSender?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: EntityTransferStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
