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
export var QuotaErrorCodeEnum;
(function (QuotaErrorCodeEnum) {
    QuotaErrorCodeEnum["Unspecified"] = "UNSPECIFIED";
    QuotaErrorCodeEnum["ResourceExhausted"] = "RESOURCE_EXHAUSTED";
    QuotaErrorCodeEnum["OutOfRange"] = "OUT_OF_RANGE";
    QuotaErrorCodeEnum["BillingNotActive"] = "BILLING_NOT_ACTIVE";
    QuotaErrorCodeEnum["ProjectDeleted"] = "PROJECT_DELETED";
    QuotaErrorCodeEnum["ApiKeyInvalid"] = "API_KEY_INVALID";
    QuotaErrorCodeEnum["ApiKeyExpired"] = "API_KEY_EXPIRED";
    QuotaErrorCodeEnum["SpatulaHeaderInvalid"] = "SPATULA_HEADER_INVALID";
    QuotaErrorCodeEnum["LoasRoleInvalid"] = "LOAS_ROLE_INVALID";
    QuotaErrorCodeEnum["NoLoasProject"] = "NO_LOAS_PROJECT";
    QuotaErrorCodeEnum["ProjectStatusUnavailable"] = "PROJECT_STATUS_UNAVAILABLE";
    QuotaErrorCodeEnum["ServiceStatusUnavailable"] = "SERVICE_STATUS_UNAVAILABLE";
    QuotaErrorCodeEnum["BillingStatusUnavailable"] = "BILLING_STATUS_UNAVAILABLE";
    QuotaErrorCodeEnum["QuotaSystemUnavailable"] = "QUOTA_SYSTEM_UNAVAILABLE";
})(QuotaErrorCodeEnum || (QuotaErrorCodeEnum = {}));
// QuotaError
/**
 * Represents error information for QuotaOperation.
**/
var QuotaError = /** @class */ (function (_super) {
    __extends(QuotaError, _super);
    function QuotaError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], QuotaError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], QuotaError.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Status)
    ], QuotaError.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subject" }),
        __metadata("design:type", String)
    ], QuotaError.prototype, "subject", void 0);
    return QuotaError;
}(SpeakeasyBase));
export { QuotaError };
