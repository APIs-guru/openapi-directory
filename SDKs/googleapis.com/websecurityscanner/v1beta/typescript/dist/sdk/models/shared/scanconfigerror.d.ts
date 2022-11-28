import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ScanConfigErrorCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Ok = "OK",
    InternalError = "INTERNAL_ERROR",
    AppengineApiBackendError = "APPENGINE_API_BACKEND_ERROR",
    AppengineApiNotAccessible = "APPENGINE_API_NOT_ACCESSIBLE",
    AppengineDefaultHostMissing = "APPENGINE_DEFAULT_HOST_MISSING",
    CannotUseGoogleComAccount = "CANNOT_USE_GOOGLE_COM_ACCOUNT",
    CannotUseOwnerAccount = "CANNOT_USE_OWNER_ACCOUNT",
    ComputeApiBackendError = "COMPUTE_API_BACKEND_ERROR",
    ComputeApiNotAccessible = "COMPUTE_API_NOT_ACCESSIBLE",
    CustomLoginUrlDoesNotBelongToCurrentProject = "CUSTOM_LOGIN_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT",
    CustomLoginUrlMalformed = "CUSTOM_LOGIN_URL_MALFORMED",
    CustomLoginUrlMappedToNonRoutableAddress = "CUSTOM_LOGIN_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS",
    CustomLoginUrlMappedToUnreservedAddress = "CUSTOM_LOGIN_URL_MAPPED_TO_UNRESERVED_ADDRESS",
    CustomLoginUrlHasNonRoutableIpAddress = "CUSTOM_LOGIN_URL_HAS_NON_ROUTABLE_IP_ADDRESS",
    CustomLoginUrlHasUnreservedIpAddress = "CUSTOM_LOGIN_URL_HAS_UNRESERVED_IP_ADDRESS",
    DuplicateScanName = "DUPLICATE_SCAN_NAME",
    InvalidFieldValue = "INVALID_FIELD_VALUE",
    FailedToAuthenticateToTarget = "FAILED_TO_AUTHENTICATE_TO_TARGET",
    FindingTypeUnspecified = "FINDING_TYPE_UNSPECIFIED",
    ForbiddenToScanCompute = "FORBIDDEN_TO_SCAN_COMPUTE",
    ForbiddenUpdateToManagedScan = "FORBIDDEN_UPDATE_TO_MANAGED_SCAN",
    MalformedFilter = "MALFORMED_FILTER",
    MalformedResourceName = "MALFORMED_RESOURCE_NAME",
    ProjectInactive = "PROJECT_INACTIVE",
    RequiredField = "REQUIRED_FIELD",
    ResourceNameInconsistent = "RESOURCE_NAME_INCONSISTENT",
    ScanAlreadyRunning = "SCAN_ALREADY_RUNNING",
    ScanNotRunning = "SCAN_NOT_RUNNING",
    SeedUrlDoesNotBelongToCurrentProject = "SEED_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT",
    SeedUrlMalformed = "SEED_URL_MALFORMED",
    SeedUrlMappedToNonRoutableAddress = "SEED_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS",
    SeedUrlMappedToUnreservedAddress = "SEED_URL_MAPPED_TO_UNRESERVED_ADDRESS",
    SeedUrlHasNonRoutableIpAddress = "SEED_URL_HAS_NON_ROUTABLE_IP_ADDRESS",
    SeedUrlHasUnreservedIpAddress = "SEED_URL_HAS_UNRESERVED_IP_ADDRESS",
    ServiceAccountNotConfigured = "SERVICE_ACCOUNT_NOT_CONFIGURED",
    TooManyScans = "TOO_MANY_SCANS",
    UnableToResolveProjectInfo = "UNABLE_TO_RESOLVE_PROJECT_INFO",
    UnsupportedBlacklistPatternFormat = "UNSUPPORTED_BLACKLIST_PATTERN_FORMAT",
    UnsupportedFilter = "UNSUPPORTED_FILTER",
    UnsupportedFindingType = "UNSUPPORTED_FINDING_TYPE",
    UnsupportedUrlScheme = "UNSUPPORTED_URL_SCHEME"
}
/**
 * Defines a custom error message used by CreateScanConfig and UpdateScanConfig APIs when scan configuration validation fails. It is also reported as part of a ScanRunErrorTrace message if scan validation fails due to a scan configuration error.
**/
export declare class ScanConfigError extends SpeakeasyBase {
    code?: ScanConfigErrorCodeEnum;
    fieldName?: string;
}
