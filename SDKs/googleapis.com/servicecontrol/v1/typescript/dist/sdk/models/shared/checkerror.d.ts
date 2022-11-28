import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
export declare enum CheckErrorCodeEnum {
    ErrorCodeUnspecified = "ERROR_CODE_UNSPECIFIED",
    NotFound = "NOT_FOUND",
    PermissionDenied = "PERMISSION_DENIED",
    ResourceExhausted = "RESOURCE_EXHAUSTED",
    BudgetExceeded = "BUDGET_EXCEEDED",
    DenialOfServiceDetected = "DENIAL_OF_SERVICE_DETECTED",
    LoadShedding = "LOAD_SHEDDING",
    AbuserDetected = "ABUSER_DETECTED",
    ServiceNotActivated = "SERVICE_NOT_ACTIVATED",
    VisibilityDenied = "VISIBILITY_DENIED",
    BillingDisabled = "BILLING_DISABLED",
    ProjectDeleted = "PROJECT_DELETED",
    ProjectInvalid = "PROJECT_INVALID",
    ConsumerInvalid = "CONSUMER_INVALID",
    IpAddressBlocked = "IP_ADDRESS_BLOCKED",
    RefererBlocked = "REFERER_BLOCKED",
    ClientAppBlocked = "CLIENT_APP_BLOCKED",
    ApiTargetBlocked = "API_TARGET_BLOCKED",
    ApiKeyInvalid = "API_KEY_INVALID",
    ApiKeyExpired = "API_KEY_EXPIRED",
    ApiKeyNotFound = "API_KEY_NOT_FOUND",
    SpatulaHeaderInvalid = "SPATULA_HEADER_INVALID",
    LoasRoleInvalid = "LOAS_ROLE_INVALID",
    NoLoasProject = "NO_LOAS_PROJECT",
    LoasProjectDisabled = "LOAS_PROJECT_DISABLED",
    SecurityPolicyViolated = "SECURITY_POLICY_VIOLATED",
    InvalidCredential = "INVALID_CREDENTIAL",
    LocationPolicyViolated = "LOCATION_POLICY_VIOLATED",
    NamespaceLookupUnavailable = "NAMESPACE_LOOKUP_UNAVAILABLE",
    ServiceStatusUnavailable = "SERVICE_STATUS_UNAVAILABLE",
    BillingStatusUnavailable = "BILLING_STATUS_UNAVAILABLE",
    QuotaCheckUnavailable = "QUOTA_CHECK_UNAVAILABLE",
    LoasProjectLookupUnavailable = "LOAS_PROJECT_LOOKUP_UNAVAILABLE",
    CloudResourceManagerBackendUnavailable = "CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE",
    SecurityPolicyBackendUnavailable = "SECURITY_POLICY_BACKEND_UNAVAILABLE",
    LocationPolicyBackendUnavailable = "LOCATION_POLICY_BACKEND_UNAVAILABLE",
    InjectedError = "INJECTED_ERROR"
}
/**
 * Defines the errors to be returned in google.api.servicecontrol.v1.CheckResponse.check_errors.
**/
export declare class CheckError extends SpeakeasyBase {
    code?: CheckErrorCodeEnum;
    detail?: string;
    status?: Status;
    subject?: string;
}
