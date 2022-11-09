import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2IntentBatch } from "./googleclouddialogflowv2intentbatch";

export enum GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum {
    IntentViewUnspecified = "INTENT_VIEW_UNSPECIFIED"
,    IntentViewFull = "INTENT_VIEW_FULL"
}


export class GoogleCloudDialogflowV2BatchUpdateIntentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=intentBatchInline" })
  intentBatchInline?: GoogleCloudDialogflowV2IntentBatch;

  @Metadata({ data: "json, name=intentBatchUri" })
  intentBatchUri?: string;

  @Metadata({ data: "json, name=intentView" })
  intentView?: GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
