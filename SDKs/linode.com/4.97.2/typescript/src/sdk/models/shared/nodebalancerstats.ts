import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NodeBalancerStatsDataTraffic
/** 
 * Traffic statistics for this NodeBalancer.
 * 
**/
export class NodeBalancerStatsDataTraffic extends SpeakeasyBase {
  @Metadata({ data: "json, name=in" })
  in?: number[];

  @Metadata({ data: "json, name=out" })
  out?: number[];
}


// NodeBalancerStatsData
/** 
 * The data returned about this NodeBalancers.
 * 
**/
export class NodeBalancerStatsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections?: number[];

  @Metadata({ data: "json, name=traffic" })
  traffic?: NodeBalancerStatsDataTraffic;
}


// NodeBalancerStats
/** 
 * Stats for this NodeBalancer.
 * 
**/
export class NodeBalancerStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: NodeBalancerStatsData;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
