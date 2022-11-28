import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RevisionTemplate } from "./revisiontemplate";
import { TrafficTargetInput } from "./traffictarget";
import { TrafficTarget } from "./traffictarget";



// ServiceSpecInput
/** 
 * ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
**/
export class ServiceSpecInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: RevisionTemplate;

  @SpeakeasyMetadata({ data: "json, name=traffic", elemType: TrafficTargetInput })
  traffic?: TrafficTargetInput[];
}


// ServiceSpec
/** 
 * ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
**/
export class ServiceSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: RevisionTemplate;

  @SpeakeasyMetadata({ data: "json, name=traffic", elemType: TrafficTarget })
  traffic?: TrafficTarget[];
}
