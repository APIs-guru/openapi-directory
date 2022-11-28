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
import { TimeSpan } from "./timespan";
import { Volume } from "./volume";
export var BuildStepStatusEnum;
(function (BuildStepStatusEnum) {
    BuildStepStatusEnum["StatusUnknown"] = "STATUS_UNKNOWN";
    BuildStepStatusEnum["Pending"] = "PENDING";
    BuildStepStatusEnum["Queued"] = "QUEUED";
    BuildStepStatusEnum["Working"] = "WORKING";
    BuildStepStatusEnum["Success"] = "SUCCESS";
    BuildStepStatusEnum["Failure"] = "FAILURE";
    BuildStepStatusEnum["InternalError"] = "INTERNAL_ERROR";
    BuildStepStatusEnum["Timeout"] = "TIMEOUT";
    BuildStepStatusEnum["Cancelled"] = "CANCELLED";
    BuildStepStatusEnum["Expired"] = "EXPIRED";
})(BuildStepStatusEnum || (BuildStepStatusEnum = {}));
// BuildStep
/**
 * A step in the build pipeline.
**/
var BuildStep = /** @class */ (function (_super) {
    __extends(BuildStep, _super);
    function BuildStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowExitCodes" }),
        __metadata("design:type", Array)
    ], BuildStep.prototype, "allowExitCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowFailure" }),
        __metadata("design:type", Boolean)
    ], BuildStep.prototype, "allowFailure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=args" }),
        __metadata("design:type", Array)
    ], BuildStep.prototype, "args", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dir" }),
        __metadata("design:type", String)
    ], BuildStep.prototype, "dir", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entrypoint" }),
        __metadata("design:type", String)
    ], BuildStep.prototype, "entrypoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=env" }),
        __metadata("design:type", Array)
    ], BuildStep.prototype, "env", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exitCode" }),
        __metadata("design:type", Number)
    ], BuildStep.prototype, "exitCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BuildStep.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BuildStep.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullTiming" }),
        __metadata("design:type", TimeSpan)
    ], BuildStep.prototype, "pullTiming", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script" }),
        __metadata("design:type", String)
    ], BuildStep.prototype, "script", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secretEnv" }),
        __metadata("design:type", Array)
    ], BuildStep.prototype, "secretEnv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], BuildStep.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", String)
    ], BuildStep.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timing" }),
        __metadata("design:type", TimeSpan)
    ], BuildStep.prototype, "timing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume }),
        __metadata("design:type", Array)
    ], BuildStep.prototype, "volumes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waitFor" }),
        __metadata("design:type", Array)
    ], BuildStep.prototype, "waitFor", void 0);
    return BuildStep;
}(SpeakeasyBase));
export { BuildStep };
// BuildStepInput
/**
 * A step in the build pipeline.
**/
var BuildStepInput = /** @class */ (function (_super) {
    __extends(BuildStepInput, _super);
    function BuildStepInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowExitCodes" }),
        __metadata("design:type", Array)
    ], BuildStepInput.prototype, "allowExitCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowFailure" }),
        __metadata("design:type", Boolean)
    ], BuildStepInput.prototype, "allowFailure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=args" }),
        __metadata("design:type", Array)
    ], BuildStepInput.prototype, "args", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dir" }),
        __metadata("design:type", String)
    ], BuildStepInput.prototype, "dir", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entrypoint" }),
        __metadata("design:type", String)
    ], BuildStepInput.prototype, "entrypoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=env" }),
        __metadata("design:type", Array)
    ], BuildStepInput.prototype, "env", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BuildStepInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BuildStepInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullTiming" }),
        __metadata("design:type", TimeSpan)
    ], BuildStepInput.prototype, "pullTiming", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script" }),
        __metadata("design:type", String)
    ], BuildStepInput.prototype, "script", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secretEnv" }),
        __metadata("design:type", Array)
    ], BuildStepInput.prototype, "secretEnv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", String)
    ], BuildStepInput.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timing" }),
        __metadata("design:type", TimeSpan)
    ], BuildStepInput.prototype, "timing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume }),
        __metadata("design:type", Array)
    ], BuildStepInput.prototype, "volumes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waitFor" }),
        __metadata("design:type", Array)
    ], BuildStepInput.prototype, "waitFor", void 0);
    return BuildStepInput;
}(SpeakeasyBase));
export { BuildStepInput };
