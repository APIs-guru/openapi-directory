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
import { TestIssue } from "./testissue";
import { TestSuiteOverview } from "./testsuiteoverview";
import { TestTiming } from "./testtiming";
import { ToolExecution } from "./toolexecution";
// TestExecutionStep
/**
 * A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field.
**/
var TestExecutionStep = /** @class */ (function (_super) {
    __extends(TestExecutionStep, _super);
    function TestExecutionStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testIssues", elemType: TestIssue }),
        __metadata("design:type", Array)
    ], TestExecutionStep.prototype, "testIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testSuiteOverviews", elemType: TestSuiteOverview }),
        __metadata("design:type", Array)
    ], TestExecutionStep.prototype, "testSuiteOverviews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testTiming" }),
        __metadata("design:type", TestTiming)
    ], TestExecutionStep.prototype, "testTiming", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=toolExecution" }),
        __metadata("design:type", ToolExecution)
    ], TestExecutionStep.prototype, "toolExecution", void 0);
    return TestExecutionStep;
}(SpeakeasyBase));
export { TestExecutionStep };
