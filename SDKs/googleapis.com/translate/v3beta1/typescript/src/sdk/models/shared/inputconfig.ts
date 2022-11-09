import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcsSource } from "./gcssource";


// InputConfig
/** 
 * Input configuration for BatchTranslateText request.
**/
export class InputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GcsSource;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
