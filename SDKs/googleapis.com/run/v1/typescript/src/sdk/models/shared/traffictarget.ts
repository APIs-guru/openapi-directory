import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrafficTarget
/** 
 * TrafficTarget holds a single entry of the routing table for a Route.
**/
export class TrafficTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationName" })
  configurationName?: string;

  @Metadata({ data: "json, name=latestRevision" })
  latestRevision?: boolean;

  @Metadata({ data: "json, name=percent" })
  percent?: number;

  @Metadata({ data: "json, name=revisionName" })
  revisionName?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
