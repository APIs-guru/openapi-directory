import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleIdentityAccesscontextmanagerV1IngressSource } from "./googleidentityaccesscontextmanagerv1ingresssource";

export enum GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum {
    IdentityTypeUnspecified = "IDENTITY_TYPE_UNSPECIFIED"
,    AnyIdentity = "ANY_IDENTITY"
,    AnyUserAccount = "ANY_USER_ACCOUNT"
,    AnyServiceAccount = "ANY_SERVICE_ACCOUNT"
}


// GoogleIdentityAccesscontextmanagerV1IngressFrom
/** 
 * Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match.
**/
export class GoogleIdentityAccesscontextmanagerV1IngressFrom extends SpeakeasyBase {
  @Metadata({ data: "json, name=identities" })
  identities?: string[];

  @Metadata({ data: "json, name=identityType" })
  identityType?: GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum;

  @Metadata({ data: "json, name=sources", elemType: shared.GoogleIdentityAccesscontextmanagerV1IngressSource })
  sources?: GoogleIdentityAccesscontextmanagerV1IngressSource[];
}
