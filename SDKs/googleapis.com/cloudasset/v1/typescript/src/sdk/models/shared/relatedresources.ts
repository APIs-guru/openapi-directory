import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RelatedResource } from "./relatedresource";


// RelatedResources
/** 
 * The related resources of the primary resource.
**/
export class RelatedResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=relatedResources", elemType: shared.RelatedResource })
  relatedResources?: RelatedResource[];
}
