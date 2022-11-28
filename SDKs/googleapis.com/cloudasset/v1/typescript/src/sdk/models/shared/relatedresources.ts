import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelatedResource } from "./relatedresource";



// RelatedResources
/** 
 * The related resources of the primary resource.
**/
export class RelatedResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=relatedResources", elemType: RelatedResource })
  relatedResources?: RelatedResource[];
}
