import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageProperties } from "./imageproperties";
import { Placeholder } from "./placeholder";



// Image
/** 
 * A PageElement kind representing an image.
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentUrl" })
  contentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=imageProperties" })
  imageProperties?: ImageProperties;

  @SpeakeasyMetadata({ data: "json, name=placeholder" })
  placeholder?: Placeholder;

  @SpeakeasyMetadata({ data: "json, name=sourceUrl" })
  sourceUrl?: string;
}
