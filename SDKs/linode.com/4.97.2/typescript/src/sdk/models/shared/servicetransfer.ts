import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceTransferEntities
/** 
 * A collection of the services to include in this transfer request, separated by type.
 * 
**/
export class ServiceTransferEntities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linodes" })
  linodes?: number[];
}

export enum ServiceTransferStatusEnum {
    Accepted = "accepted",
    Cancelled = "cancelled",
    Completed = "completed",
    Failed = "failed",
    Pending = "pending",
    Stale = "stale"
}


// ServiceTransfer
/** 
 * An object representing a Service Transfer.
 * 
**/
export class ServiceTransfer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=entities" })
  entities?: ServiceTransferEntities;

  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry?: Date;

  @SpeakeasyMetadata({ data: "json, name=is_sender" })
  isSender?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ServiceTransferStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
