import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Traffic statistics for this NodeBalancer.
 *
**/
export declare class NodeBalancerStatsDataTraffic extends SpeakeasyBase {
    in?: number[];
    out?: number[];
}
/**
 * The data returned about this NodeBalancers.
 *
**/
export declare class NodeBalancerStatsData extends SpeakeasyBase {
    connections?: number[];
    traffic?: NodeBalancerStatsDataTraffic;
}
/**
 * Stats for this NodeBalancer.
 *
**/
export declare class NodeBalancerStats extends SpeakeasyBase {
    data?: NodeBalancerStatsData;
    title?: string;
}
