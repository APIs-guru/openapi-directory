import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcsDestination } from "./gcsdestination";



// DocumentOutputConfig
/** 
 * A document translation request output config.
**/
export class DocumentOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
