import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NodeConfig
/** 
 * Configuration for the connection.
**/
export class NodeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxNodeCount" })
  maxNodeCount?: number;

  @Metadata({ data: "json, name=minNodeCount" })
  minNodeCount?: number;
}
