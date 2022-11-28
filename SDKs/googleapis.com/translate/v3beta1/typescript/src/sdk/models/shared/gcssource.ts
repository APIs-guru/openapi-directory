import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GcsSource
/** 
 * The Google Cloud Storage location for the input content.
**/
export class GcsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputUri" })
  inputUri?: string;
}
