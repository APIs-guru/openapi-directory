import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Thumbnail
/** 
 * A thumbnail is an image representing a YouTube resource.
**/
export class Thumbnail extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
