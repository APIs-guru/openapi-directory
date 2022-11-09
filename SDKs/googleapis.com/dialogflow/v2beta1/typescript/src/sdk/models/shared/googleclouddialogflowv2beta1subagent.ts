import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1SubAgent
/** 
 * Contains basic configuration for a sub-agent.
**/
export class GoogleCloudDialogflowV2beta1SubAgent extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=project" })
  project?: string;
}
