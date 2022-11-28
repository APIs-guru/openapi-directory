import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2InputDataset } from "./googleclouddialogflowv2inputdataset";
import { GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig } from "./googleclouddialogflowv2evaluationconfigsmartcomposeconfig";
import { GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig } from "./googleclouddialogflowv2evaluationconfigsmartreplyconfig";



// GoogleCloudDialogflowV2EvaluationConfig
/** 
 * The configuration for model evaluation.
**/
export class GoogleCloudDialogflowV2EvaluationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasets", elemType: GoogleCloudDialogflowV2InputDataset })
  datasets?: GoogleCloudDialogflowV2InputDataset[];

  @SpeakeasyMetadata({ data: "json, name=smartComposeConfig" })
  smartComposeConfig?: GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig;

  @SpeakeasyMetadata({ data: "json, name=smartReplyConfig" })
  smartReplyConfig?: GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig;
}
