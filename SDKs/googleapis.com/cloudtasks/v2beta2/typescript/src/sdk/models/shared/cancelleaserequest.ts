import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CancelLeaseRequestResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED"
,    Basic = "BASIC"
,    Full = "FULL"
}


// CancelLeaseRequest
/** 
 * Request message for canceling a lease using CancelLease.
**/
export class CancelLeaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=responseView" })
  responseView?: CancelLeaseRequestResponseViewEnum;

  @Metadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;
}
