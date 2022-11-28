var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
export var CheckErrorCodeEnum;
(function (CheckErrorCodeEnum) {
    CheckErrorCodeEnum["ErrorCodeUnspecified"] = "ERROR_CODE_UNSPECIFIED";
    CheckErrorCodeEnum["NotFound"] = "NOT_FOUND";
    CheckErrorCodeEnum["PermissionDenied"] = "PERMISSION_DENIED";
    CheckErrorCodeEnum["ResourceExhausted"] = "RESOURCE_EXHAUSTED";
    CheckErrorCodeEnum["BudgetExceeded"] = "BUDGET_EXCEEDED";
    CheckErrorCodeEnum["DenialOfServiceDetected"] = "DENIAL_OF_SERVICE_DETECTED";
    CheckErrorCodeEnum["LoadShedding"] = "LOAD_SHEDDING";
    CheckErrorCodeEnum["AbuserDetected"] = "ABUSER_DETECTED";
    CheckErrorCodeEnum["ServiceNotActivated"] = "SERVICE_NOT_ACTIVATED";
    CheckErrorCodeEnum["VisibilityDenied"] = "VISIBILITY_DENIED";
    CheckErrorCodeEnum["BillingDisabled"] = "BILLING_DISABLED";
    CheckErrorCodeEnum["ProjectDeleted"] = "PROJECT_DELETED";
    CheckErrorCodeEnum["ProjectInvalid"] = "PROJECT_INVALID";
    CheckErrorCodeEnum["ConsumerInvalid"] = "CONSUMER_INVALID";
    CheckErrorCodeEnum["IpAddressBlocked"] = "IP_ADDRESS_BLOCKED";
    CheckErrorCodeEnum["RefererBlocked"] = "REFERER_BLOCKED";
    CheckErrorCodeEnum["ClientAppBlocked"] = "CLIENT_APP_BLOCKED";
    CheckErrorCodeEnum["ApiTargetBlocked"] = "API_TARGET_BLOCKED";
    CheckErrorCodeEnum["ApiKeyInvalid"] = "API_KEY_INVALID";
    CheckErrorCodeEnum["ApiKeyExpired"] = "API_KEY_EXPIRED";
    CheckErrorCodeEnum["ApiKeyNotFound"] = "API_KEY_NOT_FOUND";
    CheckErrorCodeEnum["SpatulaHeaderInvalid"] = "SPATULA_HEADER_INVALID";
    CheckErrorCodeEnum["LoasRoleInvalid"] = "LOAS_ROLE_INVALID";
    CheckErrorCodeEnum["NoLoasProject"] = "NO_LOAS_PROJECT";
    CheckErrorCodeEnum["LoasProjectDisabled"] = "LOAS_PROJECT_DISABLED";
    CheckErrorCodeEnum["SecurityPolicyViolated"] = "SECURITY_POLICY_VIOLATED";
    CheckErrorCodeEnum["InvalidCredential"] = "INVALID_CREDENTIAL";
    CheckErrorCodeEnum["LocationPolicyViolated"] = "LOCATION_POLICY_VIOLATED";
    CheckErrorCodeEnum["NamespaceLookupUnavailable"] = "NAMESPACE_LOOKUP_UNAVAILABLE";
    CheckErrorCodeEnum["ServiceStatusUnavailable"] = "SERVICE_STATUS_UNAVAILABLE";
    CheckErrorCodeEnum["BillingStatusUnavailable"] = "BILLING_STATUS_UNAVAILABLE";
    CheckErrorCodeEnum["QuotaCheckUnavailable"] = "QUOTA_CHECK_UNAVAILABLE";
    CheckErrorCodeEnum["LoasProjectLookupUnavailable"] = "LOAS_PROJECT_LOOKUP_UNAVAILABLE";
    CheckErrorCodeEnum["CloudResourceManagerBackendUnavailable"] = "CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE";
    CheckErrorCodeEnum["SecurityPolicyBackendUnavailable"] = "SECURITY_POLICY_BACKEND_UNAVAILABLE";
    CheckErrorCodeEnum["LocationPolicyBackendUnavailable"] = "LOCATION_POLICY_BACKEND_UNAVAILABLE";
    CheckErrorCodeEnum["InjectedError"] = "INJECTED_ERROR";
})(CheckErrorCodeEnum || (CheckErrorCodeEnum = {}));
// CheckError
/**
 * Defines the errors to be returned in google.api.servicecontrol.v1.CheckResponse.check_errors.
**/
var CheckError = /** @class */ (function (_super) {
    __extends(CheckError, _super);
    function CheckError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CheckError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], CheckError.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Status)
    ], CheckError.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subject" }),
        __metadata("design:type", String)
    ], CheckError.prototype, "subject", void 0);
    return CheckError;
}(SpeakeasyBase));
export { CheckError };
