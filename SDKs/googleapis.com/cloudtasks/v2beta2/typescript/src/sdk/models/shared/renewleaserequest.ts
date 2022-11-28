import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RenewLeaseRequestResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}


// RenewLeaseRequest
/** 
 * Request message for renewing a lease using RenewLease.
**/
export class RenewLeaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=leaseDuration" })
  leaseDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=responseView" })
  responseView?: RenewLeaseRequestResponseViewEnum;

  @SpeakeasyMetadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;
}
