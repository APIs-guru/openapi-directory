import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MediaProperties } from "./mediaproperties";



// ImageInput
/** 
 * Data representing an image.
**/
export class ImageInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=altText" })
  altText?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: MediaProperties;

  @SpeakeasyMetadata({ data: "json, name=sourceUri" })
  sourceUri?: string;
}


// Image
/** 
 * Data representing an image.
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=altText" })
  altText?: string;

  @SpeakeasyMetadata({ data: "json, name=contentUri" })
  contentUri?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: MediaProperties;

  @SpeakeasyMetadata({ data: "json, name=sourceUri" })
  sourceUri?: string;
}
