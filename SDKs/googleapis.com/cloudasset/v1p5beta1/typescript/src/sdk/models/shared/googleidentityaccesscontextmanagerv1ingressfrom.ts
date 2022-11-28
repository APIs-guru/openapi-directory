import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1IngressSource } from "./googleidentityaccesscontextmanagerv1ingresssource";


export enum GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum {
    IdentityTypeUnspecified = "IDENTITY_TYPE_UNSPECIFIED",
    AnyIdentity = "ANY_IDENTITY",
    AnyUserAccount = "ANY_USER_ACCOUNT",
    AnyServiceAccount = "ANY_SERVICE_ACCOUNT"
}


// GoogleIdentityAccesscontextmanagerV1IngressFrom
/** 
 * Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match.
**/
export class GoogleIdentityAccesscontextmanagerV1IngressFrom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identities" })
  identities?: string[];

  @SpeakeasyMetadata({ data: "json, name=identityType" })
  identityType?: GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: GoogleIdentityAccesscontextmanagerV1IngressSource })
  sources?: GoogleIdentityAccesscontextmanagerV1IngressSource[];
}
