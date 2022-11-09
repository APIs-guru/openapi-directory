import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Image
/** 
 * An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
