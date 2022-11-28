import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GcsDestination
/** 
 * The Cloud Storage location for the output content
**/
export class GcsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
