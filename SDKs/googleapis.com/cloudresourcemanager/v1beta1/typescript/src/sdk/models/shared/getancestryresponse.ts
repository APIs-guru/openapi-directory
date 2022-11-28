import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ancestor } from "./ancestor";



// GetAncestryResponse
/** 
 * Response from the projects.getAncestry method.
**/
export class GetAncestryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ancestor", elemType: Ancestor })
  ancestor?: Ancestor[];
}
