import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudConnectorsV1NodeConfig
/** 
 * Configuration for the connection.
**/
export class GoogleCloudConnectorsV1NodeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxNodeCount" })
  maxNodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=minNodeCount" })
  minNodeCount?: number;
}
