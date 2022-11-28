import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";



// InputConfig
/** 
 * The desired input location and metadata.
**/
export class InputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GcsSource;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
