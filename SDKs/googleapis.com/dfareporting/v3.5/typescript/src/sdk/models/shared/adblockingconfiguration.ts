import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdBlockingConfiguration
/** 
 * Campaign ad blocking settings.
**/
export class AdBlockingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
