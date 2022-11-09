import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Principal } from "./principal";

export enum UnmappedIdentityResolutionStatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED"
,    NotFound = "NOT_FOUND"
,    IdentitySourceNotFound = "IDENTITY_SOURCE_NOT_FOUND"
,    IdentitySourceMisconfigured = "IDENTITY_SOURCE_MISCONFIGURED"
,    TooManyMappingsFound = "TOO_MANY_MAPPINGS_FOUND"
,    InternalError = "INTERNAL_ERROR"
}


export class UnmappedIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalIdentity" })
  externalIdentity?: Principal;

  @Metadata({ data: "json, name=resolutionStatusCode" })
  resolutionStatusCode?: UnmappedIdentityResolutionStatusCodeEnum;
}
