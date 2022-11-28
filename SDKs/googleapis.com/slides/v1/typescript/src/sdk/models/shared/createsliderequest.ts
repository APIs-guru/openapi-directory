import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LayoutPlaceholderIdMapping } from "./layoutplaceholderidmapping";
import { LayoutReference } from "./layoutreference";



// CreateSlideRequest
/** 
 * Creates a slide.
**/
export class CreateSlideRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insertionIndex" })
  insertionIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=placeholderIdMappings", elemType: LayoutPlaceholderIdMapping })
  placeholderIdMappings?: LayoutPlaceholderIdMapping[];

  @SpeakeasyMetadata({ data: "json, name=slideLayoutReference" })
  slideLayoutReference?: LayoutReference;
}
