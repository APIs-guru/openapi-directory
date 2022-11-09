import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Placeholder } from "./placeholder";


// LayoutPlaceholderIdMapping
/** 
 * The user-specified ID mapping for a placeholder that will be created on a slide from a specified layout.
**/
export class LayoutPlaceholderIdMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=layoutPlaceholder" })
  layoutPlaceholder?: Placeholder;

  @Metadata({ data: "json, name=layoutPlaceholderObjectId" })
  layoutPlaceholderObjectId?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}
