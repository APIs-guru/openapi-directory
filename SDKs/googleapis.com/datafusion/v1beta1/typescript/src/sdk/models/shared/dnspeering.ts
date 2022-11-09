import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DnsPeering
/** 
 * DNS peering configuration. These configurations are used to create DNS peering with the customer Cloud DNS.
**/
export class DnsPeering extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=targetNetwork" })
  targetNetwork?: string;

  @Metadata({ data: "json, name=targetProject" })
  targetProject?: string;
}
