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
import { Duration } from "./duration";
import { Timestamp } from "./timestamp";
import { StackTrace } from "./stacktrace";
import { TestCaseReference } from "./testcasereference";
import { ToolOutputReference } from "./tooloutputreference";
export var TestCaseStatusEnum;
(function (TestCaseStatusEnum) {
    TestCaseStatusEnum["Passed"] = "passed";
    TestCaseStatusEnum["Failed"] = "failed";
    TestCaseStatusEnum["Error"] = "error";
    TestCaseStatusEnum["Skipped"] = "skipped";
    TestCaseStatusEnum["Flaky"] = "flaky";
})(TestCaseStatusEnum || (TestCaseStatusEnum = {}));
var TestCase = /** @class */ (function (_super) {
    __extends(TestCase, _super);
    function TestCase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elapsedTime" }),
        __metadata("design:type", Duration)
    ], TestCase.prototype, "elapsedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", Timestamp)
    ], TestCase.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skippedMessage" }),
        __metadata("design:type", String)
    ], TestCase.prototype, "skippedMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stackTraces", elemType: StackTrace }),
        __metadata("design:type", Array)
    ], TestCase.prototype, "stackTraces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", Timestamp)
    ], TestCase.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TestCase.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testCaseId" }),
        __metadata("design:type", String)
    ], TestCase.prototype, "testCaseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testCaseReference" }),
        __metadata("design:type", TestCaseReference)
    ], TestCase.prototype, "testCaseReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=toolOutputs", elemType: ToolOutputReference }),
        __metadata("design:type", Array)
    ], TestCase.prototype, "toolOutputs", void 0);
    return TestCase;
}(SpeakeasyBase));
export { TestCase };
