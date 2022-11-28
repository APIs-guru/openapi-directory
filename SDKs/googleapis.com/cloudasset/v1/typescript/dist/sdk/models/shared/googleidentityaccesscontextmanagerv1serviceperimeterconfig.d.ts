import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1EgressPolicy } from "./googleidentityaccesscontextmanagerv1egresspolicy";
import { GoogleIdentityAccesscontextmanagerV1IngressPolicy } from "./googleidentityaccesscontextmanagerv1ingresspolicy";
import { GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices } from "./googleidentityaccesscontextmanagerv1vpcaccessibleservices";
/**
 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
**/
export declare class GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig extends SpeakeasyBase {
    accessLevels?: string[];
    egressPolicies?: GoogleIdentityAccesscontextmanagerV1EgressPolicy[];
    ingressPolicies?: GoogleIdentityAccesscontextmanagerV1IngressPolicy[];
    resources?: string[];
    restrictedServices?: string[];
    vpcAccessibleServices?: GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices;
}
