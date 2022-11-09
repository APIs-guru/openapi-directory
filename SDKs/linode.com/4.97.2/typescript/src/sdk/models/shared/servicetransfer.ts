import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceTransferEntities
/** 
 * A collection of the services to include in this transfer request, separated by type.
 * 
**/
export class ServiceTransferEntities extends SpeakeasyBase {
  @Metadata({ data: "json, name=linodes" })
  linodes?: number[];
}

export enum ServiceTransferStatusEnum {
    Accepted = "accepted"
,    Cancelled = "cancelled"
,    Completed = "completed"
,    Failed = "failed"
,    Pending = "pending"
,    Stale = "stale"
}


// ServiceTransfer
/** 
 * An object representing a Service Transfer.
 * 
**/
export class ServiceTransfer extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=entities" })
  entities?: ServiceTransferEntities;

  @Metadata({ data: "json, name=expiry" })
  expiry?: Date;

  @Metadata({ data: "json, name=is_sender" })
  isSender?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: ServiceTransferStatusEnum;

  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
