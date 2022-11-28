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
export var EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum;
(function (EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum) {
    EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum["Unspecified"] = "UNSPECIFIED";
    EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum["Ignore"] = "IGNORE";
    EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum["None"] = "NONE";
    EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum["Fatal"] = "FATAL";
    EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum["FixedInterval"] = "FIXED_INTERVAL";
    EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum["LinearBackoff"] = "LINEAR_BACKOFF";
    EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum["ExponentialBackoff"] = "EXPONENTIAL_BACKOFF";
    EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum["RestartWorkflowWithBackoff"] = "RESTART_WORKFLOW_WITH_BACKOFF";
})(EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum || (EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum = {}));
// EnterpriseCrmEventbusProtoFailurePolicy
/**
 * Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).
**/
var EnterpriseCrmEventbusProtoFailurePolicy = /** @class */ (function (_super) {
    __extends(EnterpriseCrmEventbusProtoFailurePolicy, _super);
    function EnterpriseCrmEventbusProtoFailurePolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intervalInSeconds" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoFailurePolicy.prototype, "intervalInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxNumRetries" }),
        __metadata("design:type", Number)
    ], EnterpriseCrmEventbusProtoFailurePolicy.prototype, "maxNumRetries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retryStrategy" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoFailurePolicy.prototype, "retryStrategy", void 0);
    return EnterpriseCrmEventbusProtoFailurePolicy;
}(SpeakeasyBase));
export { EnterpriseCrmEventbusProtoFailurePolicy };
