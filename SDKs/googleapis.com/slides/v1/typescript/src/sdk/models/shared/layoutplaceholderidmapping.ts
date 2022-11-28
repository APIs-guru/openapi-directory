import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Placeholder } from "./placeholder";



// LayoutPlaceholderIdMapping
/** 
 * The user-specified ID mapping for a placeholder that will be created on a slide from a specified layout.
**/
export class LayoutPlaceholderIdMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=layoutPlaceholder" })
  layoutPlaceholder?: Placeholder;

  @SpeakeasyMetadata({ data: "json, name=layoutPlaceholderObjectId" })
  layoutPlaceholderObjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}
