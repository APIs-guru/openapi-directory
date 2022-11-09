import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Thread
/** 
 * A thread in Google Chat.
**/
export class Thread extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
