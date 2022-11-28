import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig
/** 
 * Smart compose specific configuration for evaluation job.
**/
export class GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowlistDocument" })
  allowlistDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResultCount" })
  maxResultCount?: number;
}
