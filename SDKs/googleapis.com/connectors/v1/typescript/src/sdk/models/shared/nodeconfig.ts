import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodeConfig
/** 
 * Configuration for the connection.
**/
export class NodeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxNodeCount" })
  maxNodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=minNodeCount" })
  minNodeCount?: number;
}
