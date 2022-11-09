import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcsDestination } from "./gcsdestination";


// BatchDocumentOutputConfig
/** 
 * Output configuration for BatchTranslateDocument request.
**/
export class BatchDocumentOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;
}
