import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Output
/** 
 * Location of output file(s) in a Cloud Storage bucket.
**/
export class Output extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
