package shared




type AbortInfoCauseEnum string

const (
    AbortInfoCauseEnumCauseUnspecified AbortInfoCauseEnum = "CAUSE_UNSPECIFIED"
AbortInfoCauseEnumUnknownNetwork AbortInfoCauseEnum = "UNKNOWN_NETWORK"
AbortInfoCauseEnumUnknownIP AbortInfoCauseEnum = "UNKNOWN_IP"
AbortInfoCauseEnumUnknownProject AbortInfoCauseEnum = "UNKNOWN_PROJECT"
AbortInfoCauseEnumPermissionDenied AbortInfoCauseEnum = "PERMISSION_DENIED"
AbortInfoCauseEnumNoSourceLocation AbortInfoCauseEnum = "NO_SOURCE_LOCATION"
AbortInfoCauseEnumInvalidArgument AbortInfoCauseEnum = "INVALID_ARGUMENT"
AbortInfoCauseEnumNoExternalIP AbortInfoCauseEnum = "NO_EXTERNAL_IP"
AbortInfoCauseEnumUnintendedDestination AbortInfoCauseEnum = "UNINTENDED_DESTINATION"
AbortInfoCauseEnumTraceTooLong AbortInfoCauseEnum = "TRACE_TOO_LONG"
AbortInfoCauseEnumInternalError AbortInfoCauseEnum = "INTERNAL_ERROR"
AbortInfoCauseEnumSourceEndpointNotFound AbortInfoCauseEnum = "SOURCE_ENDPOINT_NOT_FOUND"
AbortInfoCauseEnumMismatchedSourceNetwork AbortInfoCauseEnum = "MISMATCHED_SOURCE_NETWORK"
AbortInfoCauseEnumDestinationEndpointNotFound AbortInfoCauseEnum = "DESTINATION_ENDPOINT_NOT_FOUND"
AbortInfoCauseEnumMismatchedDestinationNetwork AbortInfoCauseEnum = "MISMATCHED_DESTINATION_NETWORK"
AbortInfoCauseEnumUnsupported AbortInfoCauseEnum = "UNSUPPORTED"
AbortInfoCauseEnumMismatchedIPVersion AbortInfoCauseEnum = "MISMATCHED_IP_VERSION"
)


type AbortInfo struct {
    Cause *AbortInfoCauseEnum `json:"cause,omitempty"`
    ProjectsMissingPermission []string `json:"projectsMissingPermission,omitempty"`
    ResourceURI *string `json:"resourceUri,omitempty"`
    
}

