import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IpFiltering
/** 
 * The filtering configuration block for a service of globally.
**/
export class IpFiltering extends SpeakeasyBase {
  @Metadata({ data: "json, name=blacklist" })
  blacklist: string[];

  @Metadata({ data: "json, name=whitelist" })
  whitelist: string[];
}
