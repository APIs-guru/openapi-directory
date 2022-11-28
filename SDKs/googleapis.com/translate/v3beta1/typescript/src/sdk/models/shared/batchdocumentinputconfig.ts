import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";



// BatchDocumentInputConfig
/** 
 * Input configuration for BatchTranslateDocument request.
**/
export class BatchDocumentInputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GcsSource;
}
