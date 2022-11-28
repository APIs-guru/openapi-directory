import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeploymentNote
/** 
 * An artifact that can be deployed in some runtime.
**/
export class DeploymentNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceUri" })
  resourceUri?: string[];
}
