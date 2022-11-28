package shared

type ScanConfigErrorCodeEnum string

const (
	ScanConfigErrorCodeEnumCodeUnspecified                             ScanConfigErrorCodeEnum = "CODE_UNSPECIFIED"
	ScanConfigErrorCodeEnumOk                                          ScanConfigErrorCodeEnum = "OK"
	ScanConfigErrorCodeEnumInternalError                               ScanConfigErrorCodeEnum = "INTERNAL_ERROR"
	ScanConfigErrorCodeEnumAppengineAPIBackendError                    ScanConfigErrorCodeEnum = "APPENGINE_API_BACKEND_ERROR"
	ScanConfigErrorCodeEnumAppengineAPINotAccessible                   ScanConfigErrorCodeEnum = "APPENGINE_API_NOT_ACCESSIBLE"
	ScanConfigErrorCodeEnumAppengineDefaultHostMissing                 ScanConfigErrorCodeEnum = "APPENGINE_DEFAULT_HOST_MISSING"
	ScanConfigErrorCodeEnumCannotUseGoogleComAccount                   ScanConfigErrorCodeEnum = "CANNOT_USE_GOOGLE_COM_ACCOUNT"
	ScanConfigErrorCodeEnumCannotUseOwnerAccount                       ScanConfigErrorCodeEnum = "CANNOT_USE_OWNER_ACCOUNT"
	ScanConfigErrorCodeEnumComputeAPIBackendError                      ScanConfigErrorCodeEnum = "COMPUTE_API_BACKEND_ERROR"
	ScanConfigErrorCodeEnumComputeAPINotAccessible                     ScanConfigErrorCodeEnum = "COMPUTE_API_NOT_ACCESSIBLE"
	ScanConfigErrorCodeEnumCustomLoginURLDoesNotBelongToCurrentProject ScanConfigErrorCodeEnum = "CUSTOM_LOGIN_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT"
	ScanConfigErrorCodeEnumCustomLoginURLMalformed                     ScanConfigErrorCodeEnum = "CUSTOM_LOGIN_URL_MALFORMED"
	ScanConfigErrorCodeEnumCustomLoginURLMappedToNonRoutableAddress    ScanConfigErrorCodeEnum = "CUSTOM_LOGIN_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS"
	ScanConfigErrorCodeEnumCustomLoginURLMappedToUnreservedAddress     ScanConfigErrorCodeEnum = "CUSTOM_LOGIN_URL_MAPPED_TO_UNRESERVED_ADDRESS"
	ScanConfigErrorCodeEnumCustomLoginURLHasNonRoutableIPAddress       ScanConfigErrorCodeEnum = "CUSTOM_LOGIN_URL_HAS_NON_ROUTABLE_IP_ADDRESS"
	ScanConfigErrorCodeEnumCustomLoginURLHasUnreservedIPAddress        ScanConfigErrorCodeEnum = "CUSTOM_LOGIN_URL_HAS_UNRESERVED_IP_ADDRESS"
	ScanConfigErrorCodeEnumDuplicateScanName                           ScanConfigErrorCodeEnum = "DUPLICATE_SCAN_NAME"
	ScanConfigErrorCodeEnumInvalidFieldValue                           ScanConfigErrorCodeEnum = "INVALID_FIELD_VALUE"
	ScanConfigErrorCodeEnumFailedToAuthenticateToTarget                ScanConfigErrorCodeEnum = "FAILED_TO_AUTHENTICATE_TO_TARGET"
	ScanConfigErrorCodeEnumFindingTypeUnspecified                      ScanConfigErrorCodeEnum = "FINDING_TYPE_UNSPECIFIED"
	ScanConfigErrorCodeEnumForbiddenToScanCompute                      ScanConfigErrorCodeEnum = "FORBIDDEN_TO_SCAN_COMPUTE"
	ScanConfigErrorCodeEnumForbiddenUpdateToManagedScan                ScanConfigErrorCodeEnum = "FORBIDDEN_UPDATE_TO_MANAGED_SCAN"
	ScanConfigErrorCodeEnumMalformedFilter                             ScanConfigErrorCodeEnum = "MALFORMED_FILTER"
	ScanConfigErrorCodeEnumMalformedResourceName                       ScanConfigErrorCodeEnum = "MALFORMED_RESOURCE_NAME"
	ScanConfigErrorCodeEnumProjectInactive                             ScanConfigErrorCodeEnum = "PROJECT_INACTIVE"
	ScanConfigErrorCodeEnumRequiredField                               ScanConfigErrorCodeEnum = "REQUIRED_FIELD"
	ScanConfigErrorCodeEnumResourceNameInconsistent                    ScanConfigErrorCodeEnum = "RESOURCE_NAME_INCONSISTENT"
	ScanConfigErrorCodeEnumScanAlreadyRunning                          ScanConfigErrorCodeEnum = "SCAN_ALREADY_RUNNING"
	ScanConfigErrorCodeEnumScanNotRunning                              ScanConfigErrorCodeEnum = "SCAN_NOT_RUNNING"
	ScanConfigErrorCodeEnumSeedURLDoesNotBelongToCurrentProject        ScanConfigErrorCodeEnum = "SEED_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT"
	ScanConfigErrorCodeEnumSeedURLMalformed                            ScanConfigErrorCodeEnum = "SEED_URL_MALFORMED"
	ScanConfigErrorCodeEnumSeedURLMappedToNonRoutableAddress           ScanConfigErrorCodeEnum = "SEED_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS"
	ScanConfigErrorCodeEnumSeedURLMappedToUnreservedAddress            ScanConfigErrorCodeEnum = "SEED_URL_MAPPED_TO_UNRESERVED_ADDRESS"
	ScanConfigErrorCodeEnumSeedURLHasNonRoutableIPAddress              ScanConfigErrorCodeEnum = "SEED_URL_HAS_NON_ROUTABLE_IP_ADDRESS"
	ScanConfigErrorCodeEnumSeedURLHasUnreservedIPAddress               ScanConfigErrorCodeEnum = "SEED_URL_HAS_UNRESERVED_IP_ADDRESS"
	ScanConfigErrorCodeEnumServiceAccountNotConfigured                 ScanConfigErrorCodeEnum = "SERVICE_ACCOUNT_NOT_CONFIGURED"
	ScanConfigErrorCodeEnumTooManyScans                                ScanConfigErrorCodeEnum = "TOO_MANY_SCANS"
	ScanConfigErrorCodeEnumUnableToResolveProjectInfo                  ScanConfigErrorCodeEnum = "UNABLE_TO_RESOLVE_PROJECT_INFO"
	ScanConfigErrorCodeEnumUnsupportedBlacklistPatternFormat           ScanConfigErrorCodeEnum = "UNSUPPORTED_BLACKLIST_PATTERN_FORMAT"
	ScanConfigErrorCodeEnumUnsupportedFilter                           ScanConfigErrorCodeEnum = "UNSUPPORTED_FILTER"
	ScanConfigErrorCodeEnumUnsupportedFindingType                      ScanConfigErrorCodeEnum = "UNSUPPORTED_FINDING_TYPE"
	ScanConfigErrorCodeEnumUnsupportedURLScheme                        ScanConfigErrorCodeEnum = "UNSUPPORTED_URL_SCHEME"
)

// ScanConfigError
// Defines a custom error message used by CreateScanConfig and UpdateScanConfig APIs when scan configuration validation fails. It is also reported as part of a ScanRunErrorTrace message if scan validation fails due to a scan configuration error.
type ScanConfigError struct {
	Code      *ScanConfigErrorCodeEnum `json:"code,omitempty"`
	FieldName *string                  `json:"fieldName,omitempty"`
}
