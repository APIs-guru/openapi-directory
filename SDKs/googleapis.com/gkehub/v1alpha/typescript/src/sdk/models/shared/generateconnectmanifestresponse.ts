import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectAgentResource } from "./connectagentresource";


// GenerateConnectManifestResponse
/** 
 * GenerateConnectManifestResponse contains manifest information for installing/upgrading a Connect agent.
**/
export class GenerateConnectManifestResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=manifest", elemType: shared.ConnectAgentResource })
  manifest?: ConnectAgentResource[];
}
