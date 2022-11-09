import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcsSource } from "./gcssource";


// InputConfig
/** 
 * The desired input location and metadata.
**/
export class InputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GcsSource;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
