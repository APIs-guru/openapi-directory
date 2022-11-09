import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2Error } from "./googleprivacydlpv2error";
import { GooglePrivacyDlpV2InspectJobConfig } from "./googleprivacydlpv2inspectjobconfig";
import { GooglePrivacyDlpV2Trigger } from "./googleprivacydlpv2trigger";

export enum GooglePrivacyDlpV2JobTriggerStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    Healthy = "HEALTHY"
,    Paused = "PAUSED"
,    Cancelled = "CANCELLED"
}


// GooglePrivacyDlpV2JobTrigger
/** 
 * Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
**/
export class GooglePrivacyDlpV2JobTrigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.GooglePrivacyDlpV2Error })
  errors?: GooglePrivacyDlpV2Error[];

  @Metadata({ data: "json, name=inspectJob" })
  inspectJob?: GooglePrivacyDlpV2InspectJobConfig;

  @Metadata({ data: "json, name=lastRunTime" })
  lastRunTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: GooglePrivacyDlpV2JobTriggerStatusEnum;

  @Metadata({ data: "json, name=triggers", elemType: shared.GooglePrivacyDlpV2Trigger })
  triggers?: GooglePrivacyDlpV2Trigger[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
