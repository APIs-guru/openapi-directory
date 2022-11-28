import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectAgentResource } from "./connectagentresource";



// GenerateConnectManifestResponse
/** 
 * GenerateConnectManifestResponse contains manifest information for installing/upgrading a Connect agent.
**/
export class GenerateConnectManifestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=manifest", elemType: ConnectAgentResource })
  manifest?: ConnectAgentResource[];
}
