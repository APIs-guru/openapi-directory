import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";



// DocumentInputConfig
/** 
 * A document translation request input config.
**/
export class DocumentInputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GcsSource;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
