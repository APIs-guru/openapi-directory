import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebImage
/** 
 * Metadata for online images.
**/
export class WebImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
