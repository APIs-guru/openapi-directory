import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReleaseChannelConfig } from "./releasechannelconfig";



// ServerConfig
/** 
 * Kubernetes Engine service configuration.
**/
export class ServerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels", elemType: ReleaseChannelConfig })
  channels?: ReleaseChannelConfig[];

  @SpeakeasyMetadata({ data: "json, name=defaultClusterVersion" })
  defaultClusterVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultImageType" })
  defaultImageType?: string;

  @SpeakeasyMetadata({ data: "json, name=validImageTypes" })
  validImageTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=validMasterVersions" })
  validMasterVersions?: string[];

  @SpeakeasyMetadata({ data: "json, name=validNodeVersions" })
  validNodeVersions?: string[];
}
