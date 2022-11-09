import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcsSource } from "./gcssource";


// DocumentInputConfig
/** 
 * A document translation request input config.
**/
export class DocumentInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GcsSource;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
