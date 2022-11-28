import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GcsDestination
/** 
 * The Google Cloud Storage location where the output will be written to.
**/
export class GcsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
