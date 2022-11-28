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
import { SourcePosition } from "./sourceposition";
import { ExpressionReport } from "./expressionreport";
import { FunctionCall } from "./functioncall";
import { VisitedExpression } from "./visitedexpression";
export var TestResultStateEnum;
(function (TestResultStateEnum) {
    TestResultStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    TestResultStateEnum["Success"] = "SUCCESS";
    TestResultStateEnum["Failure"] = "FAILURE";
})(TestResultStateEnum || (TestResultStateEnum = {}));
// TestResult
/**
 * Test result message containing the state of the test as well as a description and source position for test failures.
**/
var TestResult = /** @class */ (function (_super) {
    __extends(TestResult, _super);
    function TestResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debugMessages" }),
        __metadata("design:type", Array)
    ], TestResult.prototype, "debugMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorPosition" }),
        __metadata("design:type", SourcePosition)
    ], TestResult.prototype, "errorPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expressionReports", elemType: ExpressionReport }),
        __metadata("design:type", Array)
    ], TestResult.prototype, "expressionReports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=functionCalls", elemType: FunctionCall }),
        __metadata("design:type", Array)
    ], TestResult.prototype, "functionCalls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], TestResult.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visitedExpressions", elemType: VisitedExpression }),
        __metadata("design:type", Array)
    ], TestResult.prototype, "visitedExpressions", void 0);
    return TestResult;
}(SpeakeasyBase));
export { TestResult };
