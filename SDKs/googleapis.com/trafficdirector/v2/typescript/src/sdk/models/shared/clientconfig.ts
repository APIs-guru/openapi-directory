import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Node } from "./node";
import { PerXdsConfig } from "./perxdsconfig";


// ClientConfig
/** 
 * All xds configs for a particular client.
**/
export class ClientConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=node" })
  node?: Node;

  @Metadata({ data: "json, name=xdsConfig", elemType: shared.PerXdsConfig })
  xdsConfig?: PerXdsConfig[];
}
