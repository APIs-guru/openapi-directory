import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcsDestination } from "./gcsdestination";



// BatchDocumentOutputConfig
/** 
 * Output configuration for BatchTranslateDocument request.
**/
export class BatchDocumentOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;
}
