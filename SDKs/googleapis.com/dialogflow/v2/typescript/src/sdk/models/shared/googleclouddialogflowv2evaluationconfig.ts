import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2InputDataset } from "./googleclouddialogflowv2inputdataset";
import { GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig } from "./googleclouddialogflowv2evaluationconfigsmartcomposeconfig";
import { GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig } from "./googleclouddialogflowv2evaluationconfigsmartreplyconfig";


// GoogleCloudDialogflowV2EvaluationConfig
/** 
 * The configuration for model evaluation.
**/
export class GoogleCloudDialogflowV2EvaluationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasets", elemType: shared.GoogleCloudDialogflowV2InputDataset })
  datasets?: GoogleCloudDialogflowV2InputDataset[];

  @Metadata({ data: "json, name=smartComposeConfig" })
  smartComposeConfig?: GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig;

  @Metadata({ data: "json, name=smartReplyConfig" })
  smartReplyConfig?: GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig;
}
