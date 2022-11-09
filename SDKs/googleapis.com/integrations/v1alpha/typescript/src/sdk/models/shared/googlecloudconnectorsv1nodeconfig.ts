import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudConnectorsV1NodeConfig
/** 
 * Configuration for the connection.
**/
export class GoogleCloudConnectorsV1NodeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxNodeCount" })
  maxNodeCount?: number;

  @Metadata({ data: "json, name=minNodeCount" })
  minNodeCount?: number;
}
