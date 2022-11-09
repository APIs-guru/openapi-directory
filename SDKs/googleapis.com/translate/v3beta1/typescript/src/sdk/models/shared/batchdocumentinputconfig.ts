import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcsSource } from "./gcssource";


// BatchDocumentInputConfig
/** 
 * Input configuration for BatchTranslateDocument request.
**/
export class BatchDocumentInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GcsSource;
}
