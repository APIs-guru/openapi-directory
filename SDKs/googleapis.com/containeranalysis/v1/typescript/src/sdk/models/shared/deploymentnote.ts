import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeploymentNote
/** 
 * An artifact that can be deployed in some runtime.
**/
export class DeploymentNote extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceUri" })
  resourceUri?: string[];
}
