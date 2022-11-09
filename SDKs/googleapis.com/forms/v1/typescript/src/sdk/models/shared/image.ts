import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MediaProperties } from "./mediaproperties";


// Image
/** 
 * Data representing an image.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=altText" })
  altText?: string;

  @Metadata({ data: "json, name=contentUri" })
  contentUri?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: MediaProperties;

  @Metadata({ data: "json, name=sourceUri" })
  sourceUri?: string;
}
