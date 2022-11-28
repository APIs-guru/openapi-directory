import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Thumbnail
/** 
 * A single thumbnail, with its size and format.
**/
export class Thumbnail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=heightPx" })
  heightPx?: number;

  @SpeakeasyMetadata({ data: "json, name=widthPx" })
  widthPx?: number;
}
