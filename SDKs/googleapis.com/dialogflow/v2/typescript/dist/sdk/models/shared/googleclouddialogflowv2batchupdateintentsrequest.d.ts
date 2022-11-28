import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentBatchInput } from "./googleclouddialogflowv2intentbatch";
export declare enum GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum {
    IntentViewUnspecified = "INTENT_VIEW_UNSPECIFIED",
    IntentViewFull = "INTENT_VIEW_FULL"
}
export declare class GoogleCloudDialogflowV2BatchUpdateIntentsRequestInput extends SpeakeasyBase {
    intentBatchInline?: GoogleCloudDialogflowV2IntentBatchInput;
    intentBatchUri?: string;
    intentView?: GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum;
    languageCode?: string;
    updateMask?: string;
}
