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
import { Timestamp } from "./timestamp";
import { Outcome } from "./outcome";
import { Specification } from "./specification";
export var ExecutionStateEnum;
(function (ExecutionStateEnum) {
    ExecutionStateEnum["UnknownState"] = "unknownState";
    ExecutionStateEnum["Pending"] = "pending";
    ExecutionStateEnum["InProgress"] = "inProgress";
    ExecutionStateEnum["Complete"] = "complete";
})(ExecutionStateEnum || (ExecutionStateEnum = {}));
// Execution
/**
 * An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step The maximum size of an execution message is 1 MiB. An Execution can be updated until its state is set to COMPLETE at which point it becomes immutable.
**/
var Execution = /** @class */ (function (_super) {
    __extends(Execution, _super);
    function Execution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completionTime" }),
        __metadata("design:type", Timestamp)
    ], Execution.prototype, "completionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", Timestamp)
    ], Execution.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensionDefinitions" }),
        __metadata("design:type", Array)
    ], Execution.prototype, "dimensionDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionId" }),
        __metadata("design:type", String)
    ], Execution.prototype, "executionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outcome" }),
        __metadata("design:type", Outcome)
    ], Execution.prototype, "outcome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specification" }),
        __metadata("design:type", Specification)
    ], Execution.prototype, "specification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Execution.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testExecutionMatrixId" }),
        __metadata("design:type", String)
    ], Execution.prototype, "testExecutionMatrixId", void 0);
    return Execution;
}(SpeakeasyBase));
export { Execution };
