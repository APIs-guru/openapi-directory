import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrafficTargetInput
/** 
 * TrafficTarget holds a single entry of the routing table for a Route.
**/
export class TrafficTargetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationName" })
  configurationName?: string;

  @SpeakeasyMetadata({ data: "json, name=latestRevision" })
  latestRevision?: boolean;

  @SpeakeasyMetadata({ data: "json, name=percent" })
  percent?: number;

  @SpeakeasyMetadata({ data: "json, name=revisionName" })
  revisionName?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}


// TrafficTarget
/** 
 * TrafficTarget holds a single entry of the routing table for a Route.
**/
export class TrafficTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationName" })
  configurationName?: string;

  @SpeakeasyMetadata({ data: "json, name=latestRevision" })
  latestRevision?: boolean;

  @SpeakeasyMetadata({ data: "json, name=percent" })
  percent?: number;

  @SpeakeasyMetadata({ data: "json, name=revisionName" })
  revisionName?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
