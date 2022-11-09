import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleIdentityAccesscontextmanagerV1EgressPolicy } from "./googleidentityaccesscontextmanagerv1egresspolicy";
import { GoogleIdentityAccesscontextmanagerV1IngressPolicy } from "./googleidentityaccesscontextmanagerv1ingresspolicy";
import { GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices } from "./googleidentityaccesscontextmanagerv1vpcaccessibleservices";


// GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig
/** 
 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
**/
export class GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessLevels" })
  accessLevels?: string[];

  @Metadata({ data: "json, name=egressPolicies", elemType: shared.GoogleIdentityAccesscontextmanagerV1EgressPolicy })
  egressPolicies?: GoogleIdentityAccesscontextmanagerV1EgressPolicy[];

  @Metadata({ data: "json, name=ingressPolicies", elemType: shared.GoogleIdentityAccesscontextmanagerV1IngressPolicy })
  ingressPolicies?: GoogleIdentityAccesscontextmanagerV1IngressPolicy[];

  @Metadata({ data: "json, name=resources" })
  resources?: string[];

  @Metadata({ data: "json, name=restrictedServices" })
  restrictedServices?: string[];

  @Metadata({ data: "json, name=vpcAccessibleServices" })
  vpcAccessibleServices?: GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices;
}
