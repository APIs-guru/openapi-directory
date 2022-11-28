import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DestinationStatusStatusEnum {
    Unknown = "UNKNOWN",
    Active = "ACTIVE",
    Pending = "PENDING",
    Disapproved = "DISAPPROVED"
}


// DestinationStatus
/** 
 * The destination status.
**/
export class DestinationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DestinationStatusStatusEnum;
}
