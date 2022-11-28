import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
import { ProbingDetails } from "./probingdetails";
import { ReachabilityDetails } from "./reachabilitydetails";



// ConnectivityTestInput
/** 
 * A Connectivity Test for a network reachability analysis.
**/
export class ConnectivityTestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: Endpoint;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=probingDetails" })
  probingDetails?: ProbingDetails;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=reachabilityDetails" })
  reachabilityDetails?: ReachabilityDetails;

  @SpeakeasyMetadata({ data: "json, name=relatedProjects" })
  relatedProjects?: string[];

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Endpoint;
}


// ConnectivityTest
/** 
 * A Connectivity Test for a network reachability analysis.
**/
export class ConnectivityTest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: Endpoint;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=probingDetails" })
  probingDetails?: ProbingDetails;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=reachabilityDetails" })
  reachabilityDetails?: ReachabilityDetails;

  @SpeakeasyMetadata({ data: "json, name=relatedProjects" })
  relatedProjects?: string[];

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Endpoint;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
