import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig
/** 
 * Configuration specific to LivePerson (https://www.liveperson.com).
**/
export class GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;
}
