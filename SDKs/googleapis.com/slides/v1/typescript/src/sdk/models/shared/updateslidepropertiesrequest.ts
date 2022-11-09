import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SlideProperties } from "./slideproperties";


// UpdateSlidePropertiesRequest
/** 
 * Updates the properties of a Slide.
**/
export class UpdateSlidePropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=slideProperties" })
  slideProperties?: SlideProperties;
}
