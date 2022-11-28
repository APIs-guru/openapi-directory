import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectAgentResource } from "./connectagentresource";
/**
 * GenerateConnectManifestResponse contains manifest information for installing/upgrading a Connect agent.
**/
export declare class GenerateConnectManifestResponse extends SpeakeasyBase {
    manifest?: ConnectAgentResource[];
}
