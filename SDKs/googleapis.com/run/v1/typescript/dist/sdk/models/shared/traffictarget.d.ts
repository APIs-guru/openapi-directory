import { SpeakeasyBase } from "../../../internal/utils";
/**
 * TrafficTarget holds a single entry of the routing table for a Route.
**/
export declare class TrafficTargetInput extends SpeakeasyBase {
    configurationName?: string;
    latestRevision?: boolean;
    percent?: number;
    revisionName?: string;
    tag?: string;
}
/**
 * TrafficTarget holds a single entry of the routing table for a Route.
**/
export declare class TrafficTarget extends SpeakeasyBase {
    configurationName?: string;
    latestRevision?: boolean;
    percent?: number;
    revisionName?: string;
    tag?: string;
    url?: string;
}
