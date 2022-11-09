import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Thumbnail
/** 
 * A single thumbnail, with its size and format.
**/
export class Thumbnail extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=heightPx" })
  heightPx?: number;

  @Metadata({ data: "json, name=widthPx" })
  widthPx?: number;
}
