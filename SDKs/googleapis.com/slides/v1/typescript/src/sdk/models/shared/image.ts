import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageProperties } from "./imageproperties";
import { Placeholder } from "./placeholder";


// Image
/** 
 * A PageElement kind representing an image.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentUrl" })
  contentUrl?: string;

  @Metadata({ data: "json, name=imageProperties" })
  imageProperties?: ImageProperties;

  @Metadata({ data: "json, name=placeholder" })
  placeholder?: Placeholder;

  @Metadata({ data: "json, name=sourceUrl" })
  sourceUrl?: string;
}
