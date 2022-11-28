import { SpeakeasyBase } from "../../../internal/utils";
import { RrSetRoutingPolicy } from "./rrsetroutingpolicy";
/**
 * A unit of data that is returned by the DNS servers.
**/
export declare class ResourceRecordSet extends SpeakeasyBase {
    kind?: string;
    name?: string;
    routingPolicy?: RrSetRoutingPolicy;
    rrdatas?: string[];
    signatureRrdatas?: string[];
    ttl?: number;
    type?: string;
}
