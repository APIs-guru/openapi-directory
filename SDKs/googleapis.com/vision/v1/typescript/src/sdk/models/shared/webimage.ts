import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebImage
/** 
 * Metadata for online images.
**/
export class WebImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
