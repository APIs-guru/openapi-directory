import { SpeakeasyBase } from "../../../internal/utils";
import { Principal } from "./principal";
export declare enum UnmappedIdentityResolutionStatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    NotFound = "NOT_FOUND",
    IdentitySourceNotFound = "IDENTITY_SOURCE_NOT_FOUND",
    IdentitySourceMisconfigured = "IDENTITY_SOURCE_MISCONFIGURED",
    TooManyMappingsFound = "TOO_MANY_MAPPINGS_FOUND",
    InternalError = "INTERNAL_ERROR"
}
export declare class UnmappedIdentity extends SpeakeasyBase {
    externalIdentity?: Principal;
    resolutionStatusCode?: UnmappedIdentityResolutionStatusCodeEnum;
}
