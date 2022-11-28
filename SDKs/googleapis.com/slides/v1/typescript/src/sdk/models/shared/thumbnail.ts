import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Thumbnail
/** 
 * The thumbnail of a page.
**/
export class Thumbnail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentUrl" })
  contentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
