import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Endpoint } from "./endpoint";
import { ReachabilityDetails } from "./reachabilitydetails";
import { Endpoint } from "./endpoint";


// ConnectivityTest
/** 
 * A Connectivity Test for a network reachability analysis.
**/
export class ConnectivityTest extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destination" })
  destination?: Endpoint;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=reachabilityDetails" })
  reachabilityDetails?: ReachabilityDetails;

  @Metadata({ data: "json, name=relatedProjects" })
  relatedProjects?: string[];

  @Metadata({ data: "json, name=source" })
  source?: Endpoint;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
