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
export var ScanConfigErrorCodeEnum;
(function (ScanConfigErrorCodeEnum) {
    ScanConfigErrorCodeEnum["CodeUnspecified"] = "CODE_UNSPECIFIED";
    ScanConfigErrorCodeEnum["Ok"] = "OK";
    ScanConfigErrorCodeEnum["InternalError"] = "INTERNAL_ERROR";
    ScanConfigErrorCodeEnum["AppengineApiBackendError"] = "APPENGINE_API_BACKEND_ERROR";
    ScanConfigErrorCodeEnum["AppengineApiNotAccessible"] = "APPENGINE_API_NOT_ACCESSIBLE";
    ScanConfigErrorCodeEnum["AppengineDefaultHostMissing"] = "APPENGINE_DEFAULT_HOST_MISSING";
    ScanConfigErrorCodeEnum["CannotUseGoogleComAccount"] = "CANNOT_USE_GOOGLE_COM_ACCOUNT";
    ScanConfigErrorCodeEnum["CannotUseOwnerAccount"] = "CANNOT_USE_OWNER_ACCOUNT";
    ScanConfigErrorCodeEnum["ComputeApiBackendError"] = "COMPUTE_API_BACKEND_ERROR";
    ScanConfigErrorCodeEnum["ComputeApiNotAccessible"] = "COMPUTE_API_NOT_ACCESSIBLE";
    ScanConfigErrorCodeEnum["CustomLoginUrlDoesNotBelongToCurrentProject"] = "CUSTOM_LOGIN_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT";
    ScanConfigErrorCodeEnum["CustomLoginUrlMalformed"] = "CUSTOM_LOGIN_URL_MALFORMED";
    ScanConfigErrorCodeEnum["CustomLoginUrlMappedToNonRoutableAddress"] = "CUSTOM_LOGIN_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS";
    ScanConfigErrorCodeEnum["CustomLoginUrlMappedToUnreservedAddress"] = "CUSTOM_LOGIN_URL_MAPPED_TO_UNRESERVED_ADDRESS";
    ScanConfigErrorCodeEnum["CustomLoginUrlHasNonRoutableIpAddress"] = "CUSTOM_LOGIN_URL_HAS_NON_ROUTABLE_IP_ADDRESS";
    ScanConfigErrorCodeEnum["CustomLoginUrlHasUnreservedIpAddress"] = "CUSTOM_LOGIN_URL_HAS_UNRESERVED_IP_ADDRESS";
    ScanConfigErrorCodeEnum["DuplicateScanName"] = "DUPLICATE_SCAN_NAME";
    ScanConfigErrorCodeEnum["InvalidFieldValue"] = "INVALID_FIELD_VALUE";
    ScanConfigErrorCodeEnum["FailedToAuthenticateToTarget"] = "FAILED_TO_AUTHENTICATE_TO_TARGET";
    ScanConfigErrorCodeEnum["FindingTypeUnspecified"] = "FINDING_TYPE_UNSPECIFIED";
    ScanConfigErrorCodeEnum["ForbiddenToScanCompute"] = "FORBIDDEN_TO_SCAN_COMPUTE";
    ScanConfigErrorCodeEnum["ForbiddenUpdateToManagedScan"] = "FORBIDDEN_UPDATE_TO_MANAGED_SCAN";
    ScanConfigErrorCodeEnum["MalformedFilter"] = "MALFORMED_FILTER";
    ScanConfigErrorCodeEnum["MalformedResourceName"] = "MALFORMED_RESOURCE_NAME";
    ScanConfigErrorCodeEnum["ProjectInactive"] = "PROJECT_INACTIVE";
    ScanConfigErrorCodeEnum["RequiredField"] = "REQUIRED_FIELD";
    ScanConfigErrorCodeEnum["ResourceNameInconsistent"] = "RESOURCE_NAME_INCONSISTENT";
    ScanConfigErrorCodeEnum["ScanAlreadyRunning"] = "SCAN_ALREADY_RUNNING";
    ScanConfigErrorCodeEnum["ScanNotRunning"] = "SCAN_NOT_RUNNING";
    ScanConfigErrorCodeEnum["SeedUrlDoesNotBelongToCurrentProject"] = "SEED_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT";
    ScanConfigErrorCodeEnum["SeedUrlMalformed"] = "SEED_URL_MALFORMED";
    ScanConfigErrorCodeEnum["SeedUrlMappedToNonRoutableAddress"] = "SEED_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS";
    ScanConfigErrorCodeEnum["SeedUrlMappedToUnreservedAddress"] = "SEED_URL_MAPPED_TO_UNRESERVED_ADDRESS";
    ScanConfigErrorCodeEnum["SeedUrlHasNonRoutableIpAddress"] = "SEED_URL_HAS_NON_ROUTABLE_IP_ADDRESS";
    ScanConfigErrorCodeEnum["SeedUrlHasUnreservedIpAddress"] = "SEED_URL_HAS_UNRESERVED_IP_ADDRESS";
    ScanConfigErrorCodeEnum["ServiceAccountNotConfigured"] = "SERVICE_ACCOUNT_NOT_CONFIGURED";
    ScanConfigErrorCodeEnum["TooManyScans"] = "TOO_MANY_SCANS";
    ScanConfigErrorCodeEnum["UnableToResolveProjectInfo"] = "UNABLE_TO_RESOLVE_PROJECT_INFO";
    ScanConfigErrorCodeEnum["UnsupportedBlacklistPatternFormat"] = "UNSUPPORTED_BLACKLIST_PATTERN_FORMAT";
    ScanConfigErrorCodeEnum["UnsupportedFilter"] = "UNSUPPORTED_FILTER";
    ScanConfigErrorCodeEnum["UnsupportedFindingType"] = "UNSUPPORTED_FINDING_TYPE";
    ScanConfigErrorCodeEnum["UnsupportedUrlScheme"] = "UNSUPPORTED_URL_SCHEME";
})(ScanConfigErrorCodeEnum || (ScanConfigErrorCodeEnum = {}));
// ScanConfigError
/**
 * Defines a custom error message used by CreateScanConfig and UpdateScanConfig APIs when scan configuration validation fails. It is also reported as part of a ScanRunErrorTrace message if scan validation fails due to a scan configuration error.
**/
var ScanConfigError = /** @class */ (function (_super) {
    __extends(ScanConfigError, _super);
    function ScanConfigError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ScanConfigError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldName" }),
        __metadata("design:type", String)
    ], ScanConfigError.prototype, "fieldName", void 0);
    return ScanConfigError;
}(SpeakeasyBase));
export { ScanConfigError };
