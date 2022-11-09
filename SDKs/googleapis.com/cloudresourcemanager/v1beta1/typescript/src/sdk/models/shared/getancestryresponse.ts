import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Ancestor } from "./ancestor";


// GetAncestryResponse
/** 
 * Response from the projects.getAncestry method.
**/
export class GetAncestryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ancestor", elemType: shared.Ancestor })
  ancestor?: Ancestor[];
}
