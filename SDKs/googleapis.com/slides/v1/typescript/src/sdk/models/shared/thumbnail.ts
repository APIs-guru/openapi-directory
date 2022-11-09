import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Thumbnail
/** 
 * The thumbnail of a page.
**/
export class Thumbnail extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentUrl" })
  contentUrl?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
