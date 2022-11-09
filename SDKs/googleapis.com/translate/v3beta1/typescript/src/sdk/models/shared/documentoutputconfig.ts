import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcsDestination } from "./gcsdestination";


// DocumentOutputConfig
/** 
 * A document translation request output config.
**/
export class DocumentOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
