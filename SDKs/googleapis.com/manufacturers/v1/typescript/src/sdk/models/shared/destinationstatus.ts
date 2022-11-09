import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DestinationStatusStatusEnum {
    Unknown = "UNKNOWN"
,    Active = "ACTIVE"
,    Pending = "PENDING"
,    Disapproved = "DISAPPROVED"
}


// DestinationStatus
/** 
 * The destination status.
**/
export class DestinationStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=status" })
  status?: DestinationStatusStatusEnum;
}
