import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2IntentMessageSelectItemInfo
/** 
 * Additional info about the select item for when it is triggered in a dialog.
**/
export class GoogleCloudDialogflowV2IntentMessageSelectItemInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=synonyms" })
  synonyms?: string[];
}
