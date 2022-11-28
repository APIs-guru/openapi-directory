import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Bucket
/** 
 * A storage bucket and its relation to a parent Firebase project.
**/
export class Bucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
