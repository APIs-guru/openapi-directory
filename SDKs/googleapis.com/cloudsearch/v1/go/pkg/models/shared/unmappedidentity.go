package shared

type UnmappedIdentityResolutionStatusCodeEnum string

const (
	UnmappedIdentityResolutionStatusCodeEnumCodeUnspecified             UnmappedIdentityResolutionStatusCodeEnum = "CODE_UNSPECIFIED"
	UnmappedIdentityResolutionStatusCodeEnumNotFound                    UnmappedIdentityResolutionStatusCodeEnum = "NOT_FOUND"
	UnmappedIdentityResolutionStatusCodeEnumIdentitySourceNotFound      UnmappedIdentityResolutionStatusCodeEnum = "IDENTITY_SOURCE_NOT_FOUND"
	UnmappedIdentityResolutionStatusCodeEnumIdentitySourceMisconfigured UnmappedIdentityResolutionStatusCodeEnum = "IDENTITY_SOURCE_MISCONFIGURED"
	UnmappedIdentityResolutionStatusCodeEnumTooManyMappingsFound        UnmappedIdentityResolutionStatusCodeEnum = "TOO_MANY_MAPPINGS_FOUND"
	UnmappedIdentityResolutionStatusCodeEnumInternalError               UnmappedIdentityResolutionStatusCodeEnum = "INTERNAL_ERROR"
)

type UnmappedIdentity struct {
	ExternalIdentity     *Principal                                `json:"externalIdentity,omitempty"`
	ResolutionStatusCode *UnmappedIdentityResolutionStatusCodeEnum `json:"resolutionStatusCode,omitempty"`
}
