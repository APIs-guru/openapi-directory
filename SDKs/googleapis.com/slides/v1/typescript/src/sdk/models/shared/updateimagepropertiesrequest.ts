import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageProperties } from "./imageproperties";



// UpdateImagePropertiesRequest
/** 
 * Update the properties of an Image.
**/
export class UpdateImagePropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=imageProperties" })
  imageProperties?: ImageProperties;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}
