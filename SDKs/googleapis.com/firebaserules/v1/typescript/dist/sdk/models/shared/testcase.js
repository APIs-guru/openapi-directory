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
import { FunctionMock } from "./functionmock";
export var TestCaseExpectationEnum;
(function (TestCaseExpectationEnum) {
    TestCaseExpectationEnum["ExpectationUnspecified"] = "EXPECTATION_UNSPECIFIED";
    TestCaseExpectationEnum["Allow"] = "ALLOW";
    TestCaseExpectationEnum["Deny"] = "DENY";
})(TestCaseExpectationEnum || (TestCaseExpectationEnum = {}));
export var TestCaseExpressionReportLevelEnum;
(function (TestCaseExpressionReportLevelEnum) {
    TestCaseExpressionReportLevelEnum["LevelUnspecified"] = "LEVEL_UNSPECIFIED";
    TestCaseExpressionReportLevelEnum["None"] = "NONE";
    TestCaseExpressionReportLevelEnum["Full"] = "FULL";
    TestCaseExpressionReportLevelEnum["Visited"] = "VISITED";
})(TestCaseExpressionReportLevelEnum || (TestCaseExpressionReportLevelEnum = {}));
export var TestCasePathEncodingEnum;
(function (TestCasePathEncodingEnum) {
    TestCasePathEncodingEnum["EncodingUnspecified"] = "ENCODING_UNSPECIFIED";
    TestCasePathEncodingEnum["UrlEncoded"] = "URL_ENCODED";
    TestCasePathEncodingEnum["Plain"] = "PLAIN";
})(TestCasePathEncodingEnum || (TestCasePathEncodingEnum = {}));
// TestCase
/**
 * `TestCase` messages provide the request context and an expectation as to whether the given context will be allowed or denied. Test cases may specify the `request`, `resource`, and `function_mocks` to mock a function call to a service-provided function. The `request` object represents context present at request-time. The `resource` is the value of the target resource as it appears in persistent storage before the request is executed.
**/
var TestCase = /** @class */ (function (_super) {
    __extends(TestCase, _super);
    function TestCase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectation" }),
        __metadata("design:type", String)
    ], TestCase.prototype, "expectation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expressionReportLevel" }),
        __metadata("design:type", String)
    ], TestCase.prototype, "expressionReportLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=functionMocks", elemType: FunctionMock }),
        __metadata("design:type", Array)
    ], TestCase.prototype, "functionMocks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pathEncoding" }),
        __metadata("design:type", String)
    ], TestCase.prototype, "pathEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", Object)
    ], TestCase.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", Object)
    ], TestCase.prototype, "resource", void 0);
    return TestCase;
}(SpeakeasyBase));
export { TestCase };
