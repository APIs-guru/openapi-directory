import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdBlockingConfiguration
/** 
 * Campaign ad blocking settings.
**/
export class AdBlockingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
