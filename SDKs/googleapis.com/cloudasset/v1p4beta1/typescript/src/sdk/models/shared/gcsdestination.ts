import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GcsDestination
/** 
 * A Cloud Storage location.
**/
export class GcsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
