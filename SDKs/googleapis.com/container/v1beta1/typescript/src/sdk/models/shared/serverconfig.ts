import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReleaseChannelConfig } from "./releasechannelconfig";
import { WindowsVersions } from "./windowsversions";


// ServerConfig
/** 
 * Kubernetes Engine service configuration.
**/
export class ServerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=channels", elemType: shared.ReleaseChannelConfig })
  channels?: ReleaseChannelConfig[];

  @Metadata({ data: "json, name=defaultClusterVersion" })
  defaultClusterVersion?: string;

  @Metadata({ data: "json, name=defaultImageType" })
  defaultImageType?: string;

  @Metadata({ data: "json, name=validImageTypes" })
  validImageTypes?: string[];

  @Metadata({ data: "json, name=validMasterVersions" })
  validMasterVersions?: string[];

  @Metadata({ data: "json, name=validNodeVersions" })
  validNodeVersions?: string[];

  @Metadata({ data: "json, name=windowsVersionMaps", elemType: shared.WindowsVersions })
  windowsVersionMaps?: Map<string, WindowsVersions>;
}
