import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";



// InputConfig
/** 
 * Input configuration for BatchTranslateText request.
**/
export class InputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GcsSource;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
