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
import { Duration } from "./duration";
import { StepDimensionValueEntry } from "./stepdimensionvalueentry";
import { StepLabelsEntry } from "./steplabelsentry";
import { MultiStep } from "./multistep";
import { Outcome } from "./outcome";
import { TestExecutionStep } from "./testexecutionstep";
import { ToolExecutionStep } from "./toolexecutionstep";
export var StepStateEnum;
(function (StepStateEnum) {
    StepStateEnum["UnknownState"] = "unknownState";
    StepStateEnum["Pending"] = "pending";
    StepStateEnum["InProgress"] = "inProgress";
    StepStateEnum["Complete"] = "complete";
})(StepStateEnum || (StepStateEnum = {}));
// Step
/**
 * A Step represents a single operation performed as part of Execution. A step can be used to represent the execution of a tool ( for example a test runner execution or an execution of a compiler). Steps can overlap (for instance two steps might have the same start time if some operations are done in parallel). Here is an example, let's consider that we have a continuous build is executing a test runner for each iteration. The workflow would look like: - user creates a Execution with id 1 - user creates an TestExecutionStep with id 100 for Execution 1 - user update TestExecutionStep with id 100 to add a raw xml log + the service parses the xml logs and returns a TestExecutionStep with updated TestResult(s). - user update the status of TestExecutionStep with id 100 to COMPLETE A Step can be updated until its state is set to COMPLETE at which points it becomes immutable. Next tag: 27
**/
var Step = /** @class */ (function (_super) {
    __extends(Step, _super);
    function Step() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completionTime" }),
        __metadata("design:type", Timestamp)
    ], Step.prototype, "completionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", Timestamp)
    ], Step.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Step.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceUsageDuration" }),
        __metadata("design:type", Duration)
    ], Step.prototype, "deviceUsageDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensionValue", elemType: StepDimensionValueEntry }),
        __metadata("design:type", Array)
    ], Step.prototype, "dimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasImages" }),
        __metadata("design:type", Boolean)
    ], Step.prototype, "hasImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels", elemType: StepLabelsEntry }),
        __metadata("design:type", Array)
    ], Step.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiStep" }),
        __metadata("design:type", MultiStep)
    ], Step.prototype, "multiStep", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Step.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outcome" }),
        __metadata("design:type", Outcome)
    ], Step.prototype, "outcome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runDuration" }),
        __metadata("design:type", Duration)
    ], Step.prototype, "runDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Step.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stepId" }),
        __metadata("design:type", String)
    ], Step.prototype, "stepId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testExecutionStep" }),
        __metadata("design:type", TestExecutionStep)
    ], Step.prototype, "testExecutionStep", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=toolExecutionStep" }),
        __metadata("design:type", ToolExecutionStep)
    ], Step.prototype, "toolExecutionStep", void 0);
    return Step;
}(SpeakeasyBase));
export { Step };
