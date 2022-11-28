import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentBatchInput } from "./googleclouddialogflowv2beta1intentbatch";
export declare enum GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum {
    IntentViewUnspecified = "INTENT_VIEW_UNSPECIFIED",
    IntentViewFull = "INTENT_VIEW_FULL"
}
/**
 * The request message for Intents.BatchUpdateIntents.
**/
export declare class GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput extends SpeakeasyBase {
    intentBatchInline?: GoogleCloudDialogflowV2beta1IntentBatchInput;
    intentBatchUri?: string;
    intentView?: GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum;
    languageCode?: string;
    updateMask?: string;
}
