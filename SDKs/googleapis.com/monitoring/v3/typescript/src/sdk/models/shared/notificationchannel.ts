import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MutationRecord } from "./mutationrecord";
import { MutationRecord } from "./mutationrecord";

export enum NotificationChannelVerificationStatusEnum {
    VerificationStatusUnspecified = "VERIFICATION_STATUS_UNSPECIFIED"
,    Unverified = "UNVERIFIED"
,    Verified = "VERIFIED"
}


// NotificationChannel
/** 
 * A NotificationChannel is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval.
**/
export class NotificationChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationRecord" })
  creationRecord?: MutationRecord;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=mutationRecords", elemType: shared.MutationRecord })
  mutationRecords?: MutationRecord[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;

  @Metadata({ data: "json, name=verificationStatus" })
  verificationStatus?: NotificationChannelVerificationStatusEnum;
}
