import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodeBalancerStatsDataTraffic
/** 
 * Traffic statistics for this NodeBalancer.
 * 
**/
export class NodeBalancerStatsDataTraffic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=in" })
  in?: number[];

  @SpeakeasyMetadata({ data: "json, name=out" })
  out?: number[];
}


// NodeBalancerStatsData
/** 
 * The data returned about this NodeBalancers.
 * 
**/
export class NodeBalancerStatsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections?: number[];

  @SpeakeasyMetadata({ data: "json, name=traffic" })
  traffic?: NodeBalancerStatsDataTraffic;
}


// NodeBalancerStats
/** 
 * Stats for this NodeBalancer.
 * 
**/
export class NodeBalancerStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: NodeBalancerStatsData;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
