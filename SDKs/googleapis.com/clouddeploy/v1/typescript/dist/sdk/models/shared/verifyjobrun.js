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
export var VerifyJobRunFailureCauseEnum;
(function (VerifyJobRunFailureCauseEnum) {
    VerifyJobRunFailureCauseEnum["FailureCauseUnspecified"] = "FAILURE_CAUSE_UNSPECIFIED";
    VerifyJobRunFailureCauseEnum["CloudBuildUnavailable"] = "CLOUD_BUILD_UNAVAILABLE";
    VerifyJobRunFailureCauseEnum["ExecutionFailed"] = "EXECUTION_FAILED";
    VerifyJobRunFailureCauseEnum["DeadlineExceeded"] = "DEADLINE_EXCEEDED";
    VerifyJobRunFailureCauseEnum["VerificationConfigNotFound"] = "VERIFICATION_CONFIG_NOT_FOUND";
})(VerifyJobRunFailureCauseEnum || (VerifyJobRunFailureCauseEnum = {}));
// VerifyJobRun
/**
 * VerifyJobRun contains information specific to a verify `JobRun`.
**/
var VerifyJobRun = /** @class */ (function (_super) {
    __extends(VerifyJobRun, _super);
    function VerifyJobRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artifactUri" }),
        __metadata("design:type", String)
    ], VerifyJobRun.prototype, "artifactUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build" }),
        __metadata("design:type", String)
    ], VerifyJobRun.prototype, "build", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventLogPath" }),
        __metadata("design:type", String)
    ], VerifyJobRun.prototype, "eventLogPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureCause" }),
        __metadata("design:type", String)
    ], VerifyJobRun.prototype, "failureCause", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureMessage" }),
        __metadata("design:type", String)
    ], VerifyJobRun.prototype, "failureMessage", void 0);
    return VerifyJobRun;
}(SpeakeasyBase));
export { VerifyJobRun };
