import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualNic
/** 
 * Configuration of gVNIC feature.
**/
export class VirtualNic extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
