import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";
import { PerXdsConfig } from "./perxdsconfig";



// ClientConfig
/** 
 * All xds configs for a particular client.
**/
export class ClientConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=node" })
  node?: Node;

  @SpeakeasyMetadata({ data: "json, name=xdsConfig", elemType: PerXdsConfig })
  xdsConfig?: PerXdsConfig[];
}
