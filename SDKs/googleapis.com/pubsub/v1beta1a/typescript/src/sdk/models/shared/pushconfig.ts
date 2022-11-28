import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PushConfig
/** 
 * Configuration for a push delivery endpoint.
**/
export class PushConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pushEndpoint" })
  pushEndpoint?: string;
}
