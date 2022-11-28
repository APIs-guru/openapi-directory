import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Output
/** 
 * Location of output file(s) in a Cloud Storage bucket.
**/
export class Output extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
