import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Thread
/** 
 * A thread in Google Chat.
**/
export class Thread extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=threadKey" })
  threadKey?: string;
}
