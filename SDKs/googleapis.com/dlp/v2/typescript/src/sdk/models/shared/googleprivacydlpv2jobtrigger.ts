import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Error } from "./googleprivacydlpv2error";
import { GooglePrivacyDlpV2InspectJobConfig } from "./googleprivacydlpv2inspectjobconfig";
import { GooglePrivacyDlpV2Trigger } from "./googleprivacydlpv2trigger";


export enum GooglePrivacyDlpV2JobTriggerStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Healthy = "HEALTHY",
    Paused = "PAUSED",
    Cancelled = "CANCELLED"
}


// GooglePrivacyDlpV2JobTrigger
/** 
 * Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
**/
export class GooglePrivacyDlpV2JobTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GooglePrivacyDlpV2Error })
  errors?: GooglePrivacyDlpV2Error[];

  @SpeakeasyMetadata({ data: "json, name=inspectJob" })
  inspectJob?: GooglePrivacyDlpV2InspectJobConfig;

  @SpeakeasyMetadata({ data: "json, name=lastRunTime" })
  lastRunTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GooglePrivacyDlpV2JobTriggerStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=triggers", elemType: GooglePrivacyDlpV2Trigger })
  triggers?: GooglePrivacyDlpV2Trigger[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GooglePrivacyDlpV2JobTriggerInput
/** 
 * Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
**/
export class GooglePrivacyDlpV2JobTriggerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=inspectJob" })
  inspectJob?: GooglePrivacyDlpV2InspectJobConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GooglePrivacyDlpV2JobTriggerStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=triggers", elemType: GooglePrivacyDlpV2Trigger })
  triggers?: GooglePrivacyDlpV2Trigger[];
}
