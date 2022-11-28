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
import { Variable } from "./variable";
import { SourceLocation } from "./sourcelocation";
import { StackFrame } from "./stackframe";
import { StatusMessage } from "./statusmessage";
export var BreakpointActionEnum;
(function (BreakpointActionEnum) {
    BreakpointActionEnum["Capture"] = "CAPTURE";
    BreakpointActionEnum["Log"] = "LOG";
})(BreakpointActionEnum || (BreakpointActionEnum = {}));
export var BreakpointLogLevelEnum;
(function (BreakpointLogLevelEnum) {
    BreakpointLogLevelEnum["Info"] = "INFO";
    BreakpointLogLevelEnum["Warning"] = "WARNING";
    BreakpointLogLevelEnum["Error"] = "ERROR";
})(BreakpointLogLevelEnum || (BreakpointLogLevelEnum = {}));
export var BreakpointStateEnum;
(function (BreakpointStateEnum) {
    BreakpointStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    BreakpointStateEnum["StateCanaryPendingAgents"] = "STATE_CANARY_PENDING_AGENTS";
    BreakpointStateEnum["StateCanaryActive"] = "STATE_CANARY_ACTIVE";
    BreakpointStateEnum["StateRollingToAll"] = "STATE_ROLLING_TO_ALL";
    BreakpointStateEnum["StateIsFinal"] = "STATE_IS_FINAL";
})(BreakpointStateEnum || (BreakpointStateEnum = {}));
// Breakpoint
/**
 * ------------------------------------------------------------------------------ ## Breakpoint (the resource) Represents the breakpoint specification, status and results.
**/
var Breakpoint = /** @class */ (function (_super) {
    __extends(Breakpoint, _super);
    function Breakpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], Breakpoint.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canaryExpireTime" }),
        __metadata("design:type", String)
    ], Breakpoint.prototype, "canaryExpireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], Breakpoint.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Breakpoint.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluatedExpressions", elemType: Variable }),
        __metadata("design:type", Array)
    ], Breakpoint.prototype, "evaluatedExpressions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expressions" }),
        __metadata("design:type", Array)
    ], Breakpoint.prototype, "expressions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finalTime" }),
        __metadata("design:type", String)
    ], Breakpoint.prototype, "finalTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Breakpoint.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isFinalState" }),
        __metadata("design:type", Boolean)
    ], Breakpoint.prototype, "isFinalState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Breakpoint.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", SourceLocation)
    ], Breakpoint.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logLevel" }),
        __metadata("design:type", String)
    ], Breakpoint.prototype, "logLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logMessageFormat" }),
        __metadata("design:type", String)
    ], Breakpoint.prototype, "logMessageFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stackFrames", elemType: StackFrame }),
        __metadata("design:type", Array)
    ], Breakpoint.prototype, "stackFrames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Breakpoint.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", StatusMessage)
    ], Breakpoint.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userEmail" }),
        __metadata("design:type", String)
    ], Breakpoint.prototype, "userEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variableTable", elemType: Variable }),
        __metadata("design:type", Array)
    ], Breakpoint.prototype, "variableTable", void 0);
    return Breakpoint;
}(SpeakeasyBase));
export { Breakpoint };
