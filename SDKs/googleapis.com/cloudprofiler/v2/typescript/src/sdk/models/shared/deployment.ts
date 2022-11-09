import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Deployment
/** 
 * Deployment contains the deployment identification information.
**/
export class Deployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=target" })
  target?: string;
}
