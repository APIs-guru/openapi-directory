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
export var StatusConditionCanonicalCodeEnum;
(function (StatusConditionCanonicalCodeEnum) {
    StatusConditionCanonicalCodeEnum["Ok"] = "OK";
    StatusConditionCanonicalCodeEnum["Cancelled"] = "CANCELLED";
    StatusConditionCanonicalCodeEnum["Unknown"] = "UNKNOWN";
    StatusConditionCanonicalCodeEnum["InvalidArgument"] = "INVALID_ARGUMENT";
    StatusConditionCanonicalCodeEnum["DeadlineExceeded"] = "DEADLINE_EXCEEDED";
    StatusConditionCanonicalCodeEnum["NotFound"] = "NOT_FOUND";
    StatusConditionCanonicalCodeEnum["AlreadyExists"] = "ALREADY_EXISTS";
    StatusConditionCanonicalCodeEnum["PermissionDenied"] = "PERMISSION_DENIED";
    StatusConditionCanonicalCodeEnum["Unauthenticated"] = "UNAUTHENTICATED";
    StatusConditionCanonicalCodeEnum["ResourceExhausted"] = "RESOURCE_EXHAUSTED";
    StatusConditionCanonicalCodeEnum["FailedPrecondition"] = "FAILED_PRECONDITION";
    StatusConditionCanonicalCodeEnum["Aborted"] = "ABORTED";
    StatusConditionCanonicalCodeEnum["OutOfRange"] = "OUT_OF_RANGE";
    StatusConditionCanonicalCodeEnum["Unimplemented"] = "UNIMPLEMENTED";
    StatusConditionCanonicalCodeEnum["Internal"] = "INTERNAL";
    StatusConditionCanonicalCodeEnum["Unavailable"] = "UNAVAILABLE";
    StatusConditionCanonicalCodeEnum["DataLoss"] = "DATA_LOSS";
})(StatusConditionCanonicalCodeEnum || (StatusConditionCanonicalCodeEnum = {}));
export var StatusConditionCodeEnum;
(function (StatusConditionCodeEnum) {
    StatusConditionCodeEnum["Unknown"] = "UNKNOWN";
    StatusConditionCodeEnum["GceStockout"] = "GCE_STOCKOUT";
    StatusConditionCodeEnum["GkeServiceAccountDeleted"] = "GKE_SERVICE_ACCOUNT_DELETED";
    StatusConditionCodeEnum["GceQuotaExceeded"] = "GCE_QUOTA_EXCEEDED";
    StatusConditionCodeEnum["SetByOperator"] = "SET_BY_OPERATOR";
    StatusConditionCodeEnum["CloudKmsKeyError"] = "CLOUD_KMS_KEY_ERROR";
    StatusConditionCodeEnum["CaExpiring"] = "CA_EXPIRING";
})(StatusConditionCodeEnum || (StatusConditionCodeEnum = {}));
// StatusCondition
/**
 * StatusCondition describes why a cluster or a node pool has a certain status (e.g., ERROR or DEGRADED).
**/
var StatusCondition = /** @class */ (function (_super) {
    __extends(StatusCondition, _super);
    function StatusCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canonicalCode" }),
        __metadata("design:type", String)
    ], StatusCondition.prototype, "canonicalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], StatusCondition.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], StatusCondition.prototype, "message", void 0);
    return StatusCondition;
}(SpeakeasyBase));
export { StatusCondition };
