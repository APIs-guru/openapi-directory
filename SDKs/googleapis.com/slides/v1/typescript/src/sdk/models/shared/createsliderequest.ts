import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LayoutPlaceholderIdMapping } from "./layoutplaceholderidmapping";
import { LayoutReference } from "./layoutreference";


// CreateSlideRequest
/** 
 * Creates a slide.
**/
export class CreateSlideRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=insertionIndex" })
  insertionIndex?: number;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=placeholderIdMappings", elemType: shared.LayoutPlaceholderIdMapping })
  placeholderIdMappings?: LayoutPlaceholderIdMapping[];

  @Metadata({ data: "json, name=slideLayoutReference" })
  slideLayoutReference?: LayoutReference;
}
