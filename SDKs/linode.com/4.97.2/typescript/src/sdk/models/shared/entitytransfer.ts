import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EntityTransferEntities
/** 
 * A collection of the entities to include in this transfer request, separated by type.
 * 
**/
export class EntityTransferEntities extends SpeakeasyBase {
  @Metadata({ data: "json, name=linodes" })
  linodes?: number[];
}

export enum EntityTransferStatusEnum {
    Accepted = "accepted"
,    Cancelled = "cancelled"
,    Completed = "completed"
,    Failed = "failed"
,    Pending = "pending"
,    Stale = "stale"
}


// EntityTransfer
/** 
 * An object representing an Entity Transfer.
 * 
**/
export class EntityTransfer extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=entities" })
  entities?: EntityTransferEntities;

  @Metadata({ data: "json, name=expiry" })
  expiry?: Date;

  @Metadata({ data: "json, name=is_sender" })
  isSender?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: EntityTransferStatusEnum;

  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
