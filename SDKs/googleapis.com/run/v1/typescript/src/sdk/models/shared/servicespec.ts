import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RevisionTemplate } from "./revisiontemplate";
import { TrafficTarget } from "./traffictarget";


// ServiceSpec
/** 
 * ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
**/
export class ServiceSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=template" })
  template?: RevisionTemplate;

  @Metadata({ data: "json, name=traffic", elemType: shared.TrafficTarget })
  traffic?: TrafficTarget[];
}
