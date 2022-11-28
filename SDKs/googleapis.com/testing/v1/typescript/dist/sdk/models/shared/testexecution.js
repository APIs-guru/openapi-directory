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
import { Environment } from "./environment";
import { Shard } from "./shard";
import { TestDetails } from "./testdetails";
import { TestSpecification } from "./testspecification";
import { ToolResultsStep } from "./toolresultsstep";
export var TestExecutionStateEnum;
(function (TestExecutionStateEnum) {
    TestExecutionStateEnum["TestStateUnspecified"] = "TEST_STATE_UNSPECIFIED";
    TestExecutionStateEnum["Validating"] = "VALIDATING";
    TestExecutionStateEnum["Pending"] = "PENDING";
    TestExecutionStateEnum["Running"] = "RUNNING";
    TestExecutionStateEnum["Finished"] = "FINISHED";
    TestExecutionStateEnum["Error"] = "ERROR";
    TestExecutionStateEnum["UnsupportedEnvironment"] = "UNSUPPORTED_ENVIRONMENT";
    TestExecutionStateEnum["IncompatibleEnvironment"] = "INCOMPATIBLE_ENVIRONMENT";
    TestExecutionStateEnum["IncompatibleArchitecture"] = "INCOMPATIBLE_ARCHITECTURE";
    TestExecutionStateEnum["Cancelled"] = "CANCELLED";
    TestExecutionStateEnum["Invalid"] = "INVALID";
})(TestExecutionStateEnum || (TestExecutionStateEnum = {}));
// TestExecution
/**
 * A single test executed in a single environment.
**/
var TestExecution = /** @class */ (function (_super) {
    __extends(TestExecution, _super);
    function TestExecution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", Environment)
    ], TestExecution.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TestExecution.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matrixId" }),
        __metadata("design:type", String)
    ], TestExecution.prototype, "matrixId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], TestExecution.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shard" }),
        __metadata("design:type", Shard)
    ], TestExecution.prototype, "shard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], TestExecution.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testDetails" }),
        __metadata("design:type", TestDetails)
    ], TestExecution.prototype, "testDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testSpecification" }),
        __metadata("design:type", TestSpecification)
    ], TestExecution.prototype, "testSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], TestExecution.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=toolResultsStep" }),
        __metadata("design:type", ToolResultsStep)
    ], TestExecution.prototype, "toolResultsStep", void 0);
    return TestExecution;
}(SpeakeasyBase));
export { TestExecution };
