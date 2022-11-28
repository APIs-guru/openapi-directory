import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1SubAgent
/** 
 * Contains basic configuration for a sub-agent.
**/
export class GoogleCloudDialogflowV2beta1SubAgent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;
}
