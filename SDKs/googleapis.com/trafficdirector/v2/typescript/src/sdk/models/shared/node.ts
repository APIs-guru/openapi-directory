import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Extension } from "./extension";
import { Address } from "./address";
import { Locality } from "./locality";
import { BuildVersion } from "./buildversion";



// Node
/** 
 * Identifies a specific Envoy instance. The node identifier is presented to the management server, which may use this identifier to distinguish per Envoy configuration for serving. [#next-free-field: 12]
**/
export class Node extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildVersion" })
  buildVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=clientFeatures" })
  clientFeatures?: string[];

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=extensions", elemType: Extension })
  extensions?: Extension[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=listeningAddresses", elemType: Address })
  listeningAddresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=locality" })
  locality?: Locality;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=userAgentBuildVersion" })
  userAgentBuildVersion?: BuildVersion;

  @SpeakeasyMetadata({ data: "json, name=userAgentName" })
  userAgentName?: string;

  @SpeakeasyMetadata({ data: "json, name=userAgentVersion" })
  userAgentVersion?: string;
}
