import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Deployment
/** 
 * Deployment contains the deployment identification information.
**/
export class Deployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;
}
