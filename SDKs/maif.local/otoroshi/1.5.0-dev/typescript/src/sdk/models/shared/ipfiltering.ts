import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpFiltering
/** 
 * The filtering configuration block for a service of globally.
**/
export class IpFiltering extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blacklist" })
  blacklist: string[];

  @SpeakeasyMetadata({ data: "json, name=whitelist" })
  whitelist: string[];
}
