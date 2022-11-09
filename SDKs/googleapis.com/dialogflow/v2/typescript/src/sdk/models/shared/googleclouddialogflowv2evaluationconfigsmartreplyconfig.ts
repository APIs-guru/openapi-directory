import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig
/** 
 * Smart reply specific configuration for evaluation job.
**/
export class GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowlistDocument" })
  allowlistDocument?: string;

  @Metadata({ data: "json, name=maxResultCount" })
  maxResultCount?: number;
}
