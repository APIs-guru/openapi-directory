import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum {
    IdentityTypeUnspecified = "IDENTITY_TYPE_UNSPECIFIED",
    AnyIdentity = "ANY_IDENTITY",
    AnyUserAccount = "ANY_USER_ACCOUNT",
    AnyServiceAccount = "ANY_SERVICE_ACCOUNT"
}
/**
 * Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed.
**/
export declare class GoogleIdentityAccesscontextmanagerV1EgressFrom extends SpeakeasyBase {
    identities?: string[];
    identityType?: GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum;
}
