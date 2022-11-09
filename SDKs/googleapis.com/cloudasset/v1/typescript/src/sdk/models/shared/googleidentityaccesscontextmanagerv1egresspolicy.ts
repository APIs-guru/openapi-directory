import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleIdentityAccesscontextmanagerV1EgressFrom } from "./googleidentityaccesscontextmanagerv1egressfrom";
import { GoogleIdentityAccesscontextmanagerV1EgressTo } from "./googleidentityaccesscontextmanagerv1egressto";


// GoogleIdentityAccesscontextmanagerV1EgressPolicy
/** 
 * Policy for egress from perimeter. EgressPolicies match requests based on `egress_from` and `egress_to` stanzas. For an EgressPolicy to match, both `egress_from` and `egress_to` stanzas must be matched. If an EgressPolicy matches a request, the request is allowed to span the ServicePerimeter boundary. For example, an EgressPolicy can be used to allow VMs on networks within the ServicePerimeter to access a defined set of projects outside the perimeter in certain contexts (e.g. to read data from a Cloud Storage bucket or query against a BigQuery dataset). EgressPolicies are concerned with the *resources* that a request relates as well as the API services and API actions being used. They do not related to the direction of data movement. More detailed documentation for this concept can be found in the descriptions of EgressFrom and EgressTo.
**/
export class GoogleIdentityAccesscontextmanagerV1EgressPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=egressFrom" })
  egressFrom?: GoogleIdentityAccesscontextmanagerV1EgressFrom;

  @Metadata({ data: "json, name=egressTo" })
  egressTo?: GoogleIdentityAccesscontextmanagerV1EgressTo;
}
