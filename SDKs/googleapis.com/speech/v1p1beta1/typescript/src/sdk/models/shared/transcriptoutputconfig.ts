import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TranscriptOutputConfig
/** 
 * Specifies an optional destination for the recognition results.
**/
export class TranscriptOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsUri" })
  gcsUri?: string;
}
