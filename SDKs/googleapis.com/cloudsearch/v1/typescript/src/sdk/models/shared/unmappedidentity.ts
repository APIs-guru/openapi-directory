import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Principal } from "./principal";


export enum UnmappedIdentityResolutionStatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    NotFound = "NOT_FOUND",
    IdentitySourceNotFound = "IDENTITY_SOURCE_NOT_FOUND",
    IdentitySourceMisconfigured = "IDENTITY_SOURCE_MISCONFIGURED",
    TooManyMappingsFound = "TOO_MANY_MAPPINGS_FOUND",
    InternalError = "INTERNAL_ERROR"
}


export class UnmappedIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalIdentity" })
  externalIdentity?: Principal;

  @SpeakeasyMetadata({ data: "json, name=resolutionStatusCode" })
  resolutionStatusCode?: UnmappedIdentityResolutionStatusCodeEnum;
}
