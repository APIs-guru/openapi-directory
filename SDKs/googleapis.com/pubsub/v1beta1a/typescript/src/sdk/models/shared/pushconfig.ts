import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PushConfig
/** 
 * Configuration for a push delivery endpoint.
**/
export class PushConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=pushEndpoint" })
  pushEndpoint?: string;
}
