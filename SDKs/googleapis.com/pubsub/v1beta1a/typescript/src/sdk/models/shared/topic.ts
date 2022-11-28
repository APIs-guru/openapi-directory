import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Topic
/** 
 * A topic resource.
**/
export class Topic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
