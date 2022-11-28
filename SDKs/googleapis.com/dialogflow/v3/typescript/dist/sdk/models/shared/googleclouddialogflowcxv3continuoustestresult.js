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
export var GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum;
(function (GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum) {
    GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum["AggregatedTestResultUnspecified"] = "AGGREGATED_TEST_RESULT_UNSPECIFIED";
    GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum["Passed"] = "PASSED";
    GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum["Failed"] = "FAILED";
})(GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum || (GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum = {}));
// GoogleCloudDialogflowCxV3ContinuousTestResult
/**
 * Represents a result from running a test case in an agent environment.
**/
var GoogleCloudDialogflowCxV3ContinuousTestResult = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3ContinuousTestResult, _super);
    function GoogleCloudDialogflowCxV3ContinuousTestResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3ContinuousTestResult.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3ContinuousTestResult.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3ContinuousTestResult.prototype, "runTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testCaseResults" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3ContinuousTestResult.prototype, "testCaseResults", void 0);
    return GoogleCloudDialogflowCxV3ContinuousTestResult;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3ContinuousTestResult };
