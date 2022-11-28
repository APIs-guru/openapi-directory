import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";



// SourceGetMetadataRequest
/** 
 * A request to compute the SourceMetadata of a Source.
**/
export class SourceGetMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;
}
