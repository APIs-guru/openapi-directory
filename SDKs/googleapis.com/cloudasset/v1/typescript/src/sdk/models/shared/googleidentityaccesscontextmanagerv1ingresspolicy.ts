import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleIdentityAccesscontextmanagerV1IngressFrom } from "./googleidentityaccesscontextmanagerv1ingressfrom";
import { GoogleIdentityAccesscontextmanagerV1IngressTo } from "./googleidentityaccesscontextmanagerv1ingressto";


// GoogleIdentityAccesscontextmanagerV1IngressPolicy
/** 
 * Policy for ingress into ServicePerimeter. IngressPolicies match requests based on `ingress_from` and `ingress_to` stanzas. For an ingress policy to match, both the `ingress_from` and `ingress_to` stanzas must be matched. If an IngressPolicy matches a request, the request is allowed through the perimeter boundary from outside the perimeter. For example, access from the internet can be allowed either based on an AccessLevel or, for traffic hosted on Google Cloud, the project of the source network. For access from private networks, using the project of the hosting network is required. Individual ingress policies can be limited by restricting which services and/or actions they match using the `ingress_to` field.
**/
export class GoogleIdentityAccesscontextmanagerV1IngressPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=ingressFrom" })
  ingressFrom?: GoogleIdentityAccesscontextmanagerV1IngressFrom;

  @Metadata({ data: "json, name=ingressTo" })
  ingressTo?: GoogleIdentityAccesscontextmanagerV1IngressTo;
}
