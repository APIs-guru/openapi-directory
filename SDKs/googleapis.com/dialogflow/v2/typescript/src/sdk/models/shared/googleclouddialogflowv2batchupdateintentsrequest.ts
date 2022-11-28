import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentBatchInput } from "./googleclouddialogflowv2intentbatch";


export enum GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum {
    IntentViewUnspecified = "INTENT_VIEW_UNSPECIFIED",
    IntentViewFull = "INTENT_VIEW_FULL"
}


export class GoogleCloudDialogflowV2BatchUpdateIntentsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intentBatchInline" })
  intentBatchInline?: GoogleCloudDialogflowV2IntentBatchInput;

  @SpeakeasyMetadata({ data: "json, name=intentBatchUri" })
  intentBatchUri?: string;

  @SpeakeasyMetadata({ data: "json, name=intentView" })
  intentView?: GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
