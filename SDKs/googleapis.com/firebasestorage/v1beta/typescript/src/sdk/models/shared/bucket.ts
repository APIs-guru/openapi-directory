import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Bucket
/** 
 * A storage bucket and its relation to a parent Firebase project.
**/
export class Bucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
