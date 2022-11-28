import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
import { ProbingDetails } from "./probingdetails";
import { ReachabilityDetails } from "./reachabilitydetails";
/**
 * A Connectivity Test for a network reachability analysis.
**/
export declare class ConnectivityTestInput extends SpeakeasyBase {
    description?: string;
    destination?: Endpoint;
    labels?: Map<string, string>;
    name?: string;
    probingDetails?: ProbingDetails;
    protocol?: string;
    reachabilityDetails?: ReachabilityDetails;
    relatedProjects?: string[];
    source?: Endpoint;
}
/**
 * A Connectivity Test for a network reachability analysis.
**/
export declare class ConnectivityTest extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    destination?: Endpoint;
    displayName?: string;
    labels?: Map<string, string>;
    name?: string;
    probingDetails?: ProbingDetails;
    protocol?: string;
    reachabilityDetails?: ReachabilityDetails;
    relatedProjects?: string[];
    source?: Endpoint;
    updateTime?: string;
}
