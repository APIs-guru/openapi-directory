import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinuxNodeConfig
/** 
 * Parameters that can be configured on Linux nodes.
**/
export class LinuxNodeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=sysctls" })
  sysctls?: Map<string, string>;
}
