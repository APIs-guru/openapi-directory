import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MutationRecord } from "./mutationrecord";


export enum NotificationChannelVerificationStatusEnum {
    VerificationStatusUnspecified = "VERIFICATION_STATUS_UNSPECIFIED",
    Unverified = "UNVERIFIED",
    Verified = "VERIFIED"
}


// NotificationChannel
/** 
 * A NotificationChannel is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval.
**/
export class NotificationChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationRecord" })
  creationRecord?: MutationRecord;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mutationRecords", elemType: MutationRecord })
  mutationRecords?: MutationRecord[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=verificationStatus" })
  verificationStatus?: NotificationChannelVerificationStatusEnum;
}
