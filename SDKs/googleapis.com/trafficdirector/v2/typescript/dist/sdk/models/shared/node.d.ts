import { SpeakeasyBase } from "../../../internal/utils";
import { Extension } from "./extension";
import { Address } from "./address";
import { Locality } from "./locality";
import { BuildVersion } from "./buildversion";
/**
 * Identifies a specific Envoy instance. The node identifier is presented to the management server, which may use this identifier to distinguish per Envoy configuration for serving. [#next-free-field: 12]
**/
export declare class Node extends SpeakeasyBase {
    buildVersion?: string;
    clientFeatures?: string[];
    cluster?: string;
    extensions?: Extension[];
    id?: string;
    listeningAddresses?: Address[];
    locality?: Locality;
    metadata?: Map<string, any>;
    userAgentBuildVersion?: BuildVersion;
    userAgentName?: string;
    userAgentVersion?: string;
}
