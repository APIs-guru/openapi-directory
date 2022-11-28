import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CancelLeaseRequestResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}


// CancelLeaseRequest
/** 
 * Request message for canceling a lease using CancelLease.
**/
export class CancelLeaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responseView" })
  responseView?: CancelLeaseRequestResponseViewEnum;

  @SpeakeasyMetadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;
}
