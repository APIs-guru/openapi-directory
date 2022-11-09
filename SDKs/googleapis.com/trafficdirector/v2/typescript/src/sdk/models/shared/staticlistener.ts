import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StaticListener
/** 
 * Describes a statically loaded listener.
**/
export class StaticListener extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @Metadata({ data: "json, name=listener" })
  listener?: Map<string, any>;
}
