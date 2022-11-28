import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2InputDataset } from "./googleclouddialogflowv2inputdataset";
import { GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig } from "./googleclouddialogflowv2evaluationconfigsmartcomposeconfig";
import { GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig } from "./googleclouddialogflowv2evaluationconfigsmartreplyconfig";
/**
 * The configuration for model evaluation.
**/
export declare class GoogleCloudDialogflowV2EvaluationConfig extends SpeakeasyBase {
    datasets?: GoogleCloudDialogflowV2InputDataset[];
    smartComposeConfig?: GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig;
    smartReplyConfig?: GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig;
}
