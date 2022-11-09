import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TranscriptOutputConfig
/** 
 * Specifies an optional destination for the recognition results.
**/
export class TranscriptOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsUri" })
  gcsUri?: string;
}
