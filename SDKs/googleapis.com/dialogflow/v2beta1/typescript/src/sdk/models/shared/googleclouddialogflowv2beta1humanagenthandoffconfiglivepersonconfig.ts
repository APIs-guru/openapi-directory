import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig
/** 
 * Configuration specific to LivePerson (https://www.liveperson.com).
**/
export class GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;
}
