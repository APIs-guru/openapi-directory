import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Source } from "./source";


// SourceGetMetadataRequest
/** 
 * A request to compute the SourceMetadata of a Source.
**/
export class SourceGetMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source?: Source;
}
