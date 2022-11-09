import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1IntentBatch } from "./googleclouddialogflowv2beta1intentbatch";

export enum GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum {
    IntentViewUnspecified = "INTENT_VIEW_UNSPECIFIED"
,    IntentViewFull = "INTENT_VIEW_FULL"
}


// GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest
/** 
 * The request message for Intents.BatchUpdateIntents.
**/
export class GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=intentBatchInline" })
  intentBatchInline?: GoogleCloudDialogflowV2beta1IntentBatch;

  @Metadata({ data: "json, name=intentBatchUri" })
  intentBatchUri?: string;

  @Metadata({ data: "json, name=intentView" })
  intentView?: GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
