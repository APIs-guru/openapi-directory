import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DnsPeering
/** 
 * DNS peering configuration. These configurations are used to create DNS peering with the customer Cloud DNS.
**/
export class DnsPeering extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=targetNetwork" })
  targetNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=targetProject" })
  targetProject?: string;
}
