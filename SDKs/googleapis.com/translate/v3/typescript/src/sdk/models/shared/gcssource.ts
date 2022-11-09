import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GcsSource
/** 
 * The Google Cloud Storage location for the input content.
**/
export class GcsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputUri" })
  inputUri?: string;
}
