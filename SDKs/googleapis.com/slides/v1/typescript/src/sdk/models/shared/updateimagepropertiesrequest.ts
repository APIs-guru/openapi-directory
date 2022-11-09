import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageProperties } from "./imageproperties";


// UpdateImagePropertiesRequest
/** 
 * Update the properties of an Image.
**/
export class UpdateImagePropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=imageProperties" })
  imageProperties?: ImageProperties;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}
