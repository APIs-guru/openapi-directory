import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo
/** 
 * Additional info about the select item for when it is triggered in a dialog.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=synonyms" })
  synonyms?: string[];
}
