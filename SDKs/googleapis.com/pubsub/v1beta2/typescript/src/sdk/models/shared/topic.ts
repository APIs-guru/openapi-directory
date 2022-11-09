import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Topic
/** 
 * A topic resource.
**/
export class Topic extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
