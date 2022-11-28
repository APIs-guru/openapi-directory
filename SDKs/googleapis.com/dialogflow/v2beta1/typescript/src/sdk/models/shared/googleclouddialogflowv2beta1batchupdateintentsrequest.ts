import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentBatchInput } from "./googleclouddialogflowv2beta1intentbatch";


export enum GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum {
    IntentViewUnspecified = "INTENT_VIEW_UNSPECIFIED",
    IntentViewFull = "INTENT_VIEW_FULL"
}


// GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput
/** 
 * The request message for Intents.BatchUpdateIntents.
**/
export class GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intentBatchInline" })
  intentBatchInline?: GoogleCloudDialogflowV2beta1IntentBatchInput;

  @SpeakeasyMetadata({ data: "json, name=intentBatchUri" })
  intentBatchUri?: string;

  @SpeakeasyMetadata({ data: "json, name=intentView" })
  intentView?: GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
