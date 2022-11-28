import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StaticListener
/** 
 * Describes a statically loaded listener.
**/
export class StaticListener extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=listener" })
  listener?: Map<string, any>;
}
