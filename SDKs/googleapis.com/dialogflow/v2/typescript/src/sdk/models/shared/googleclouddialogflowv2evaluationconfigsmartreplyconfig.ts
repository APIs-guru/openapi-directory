import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig
/** 
 * Smart reply specific configuration for evaluation job.
**/
export class GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowlistDocument" })
  allowlistDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResultCount" })
  maxResultCount?: number;
}
