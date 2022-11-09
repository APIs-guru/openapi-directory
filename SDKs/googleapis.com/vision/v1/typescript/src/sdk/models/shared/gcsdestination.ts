import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GcsDestination
/** 
 * The Google Cloud Storage location where the output will be written to.
**/
export class GcsDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
