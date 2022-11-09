import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RenewLeaseRequestResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED"
,    Basic = "BASIC"
,    Full = "FULL"
}


// RenewLeaseRequest
/** 
 * Request message for renewing a lease using RenewLease.
**/
export class RenewLeaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=leaseDuration" })
  leaseDuration?: string;

  @Metadata({ data: "json, name=responseView" })
  responseView?: RenewLeaseRequestResponseViewEnum;

  @Metadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;
}
