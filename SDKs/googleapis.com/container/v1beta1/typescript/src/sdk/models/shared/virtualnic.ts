import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualNic
/** 
 * Configuration of gVNIC feature.
**/
export class VirtualNic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
