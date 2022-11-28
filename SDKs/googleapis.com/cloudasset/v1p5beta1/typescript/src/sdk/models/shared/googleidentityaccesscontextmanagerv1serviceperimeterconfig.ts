import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1EgressPolicy } from "./googleidentityaccesscontextmanagerv1egresspolicy";
import { GoogleIdentityAccesscontextmanagerV1IngressPolicy } from "./googleidentityaccesscontextmanagerv1ingresspolicy";
import { GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices } from "./googleidentityaccesscontextmanagerv1vpcaccessibleservices";



// GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig
/** 
 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
**/
export class GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessLevels" })
  accessLevels?: string[];

  @SpeakeasyMetadata({ data: "json, name=egressPolicies", elemType: GoogleIdentityAccesscontextmanagerV1EgressPolicy })
  egressPolicies?: GoogleIdentityAccesscontextmanagerV1EgressPolicy[];

  @SpeakeasyMetadata({ data: "json, name=ingressPolicies", elemType: GoogleIdentityAccesscontextmanagerV1IngressPolicy })
  ingressPolicies?: GoogleIdentityAccesscontextmanagerV1IngressPolicy[];

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: string[];

  @SpeakeasyMetadata({ data: "json, name=restrictedServices" })
  restrictedServices?: string[];

  @SpeakeasyMetadata({ data: "json, name=vpcAccessibleServices" })
  vpcAccessibleServices?: GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices;
}
