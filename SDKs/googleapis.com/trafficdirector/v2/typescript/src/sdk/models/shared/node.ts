import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Extension } from "./extension";
import { Address } from "./address";
import { Locality } from "./locality";
import { BuildVersion } from "./buildversion";


// Node
/** 
 * Identifies a specific Envoy instance. The node identifier is presented to the management server, which may use this identifier to distinguish per Envoy configuration for serving. [#next-free-field: 12]
**/
export class Node extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildVersion" })
  buildVersion?: string;

  @Metadata({ data: "json, name=clientFeatures" })
  clientFeatures?: string[];

  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=extensions", elemType: shared.Extension })
  extensions?: Extension[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=listeningAddresses", elemType: shared.Address })
  listeningAddresses?: Address[];

  @Metadata({ data: "json, name=locality" })
  locality?: Locality;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=userAgentBuildVersion" })
  userAgentBuildVersion?: BuildVersion;

  @Metadata({ data: "json, name=userAgentName" })
  userAgentName?: string;

  @Metadata({ data: "json, name=userAgentVersion" })
  userAgentVersion?: string;
}
