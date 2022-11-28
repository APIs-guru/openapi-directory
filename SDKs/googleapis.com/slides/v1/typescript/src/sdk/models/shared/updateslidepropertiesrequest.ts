import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlideProperties } from "./slideproperties";



// UpdateSlidePropertiesRequest
/** 
 * Updates the properties of a Slide.
**/
export class UpdateSlidePropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=slideProperties" })
  slideProperties?: SlideProperties;
}
