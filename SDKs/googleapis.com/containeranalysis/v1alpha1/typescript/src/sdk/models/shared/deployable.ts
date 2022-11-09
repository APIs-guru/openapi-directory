import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Deployable
/** 
 * An artifact that can be deployed in some runtime.
**/
export class Deployable extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceUri" })
  resourceUri?: string[];
}
