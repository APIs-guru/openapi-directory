import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum {
    IdentityTypeUnspecified = "IDENTITY_TYPE_UNSPECIFIED"
,    AnyIdentity = "ANY_IDENTITY"
,    AnyUserAccount = "ANY_USER_ACCOUNT"
,    AnyServiceAccount = "ANY_SERVICE_ACCOUNT"
}


// GoogleIdentityAccesscontextmanagerV1EgressFrom
/** 
 * Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed.
**/
export class GoogleIdentityAccesscontextmanagerV1EgressFrom extends SpeakeasyBase {
  @Metadata({ data: "json, name=identities" })
  identities?: string[];

  @Metadata({ data: "json, name=identityType" })
  identityType?: GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum;
}
