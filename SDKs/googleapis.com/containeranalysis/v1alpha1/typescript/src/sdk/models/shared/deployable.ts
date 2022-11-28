import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Deployable
/** 
 * An artifact that can be deployed in some runtime.
**/
export class Deployable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceUri" })
  resourceUri?: string[];
}
