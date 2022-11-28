import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Image
/** 
 * An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved.
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
