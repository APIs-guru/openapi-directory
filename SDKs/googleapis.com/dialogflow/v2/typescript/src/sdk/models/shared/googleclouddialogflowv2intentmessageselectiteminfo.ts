import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2IntentMessageSelectItemInfo
/** 
 * Additional info about the select item for when it is triggered in a dialog.
**/
export class GoogleCloudDialogflowV2IntentMessageSelectItemInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=synonyms" })
  synonyms?: string[];
}
