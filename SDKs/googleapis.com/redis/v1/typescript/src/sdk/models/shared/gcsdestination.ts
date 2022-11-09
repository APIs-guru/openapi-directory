import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GcsDestination
/** 
 * The Cloud Storage location for the output content
**/
export class GcsDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
