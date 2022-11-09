import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig
/** 
 * Smart compose specific configuration for evaluation job.
**/
export class GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowlistDocument" })
  allowlistDocument?: string;

  @Metadata({ data: "json, name=maxResultCount" })
  maxResultCount?: number;
}
