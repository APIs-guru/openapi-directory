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
import { GoogleCloudDialogflowCxV3beta1ConversationTurnInput } from "./googleclouddialogflowcxv3beta1conversationturn";
import { GoogleCloudDialogflowCxV3beta1ConversationTurn } from "./googleclouddialogflowcxv3beta1conversationturn";
export var GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum;
(function (GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum) {
    GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum["TestResultUnspecified"] = "TEST_RESULT_UNSPECIFIED";
    GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum["Passed"] = "PASSED";
    GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum["Failed"] = "FAILED";
})(GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum || (GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum = {}));
// GoogleCloudDialogflowCxV3beta1TestCaseResultInput
/**
 * Represents a result from running a test case in an agent environment.
**/
var GoogleCloudDialogflowCxV3beta1TestCaseResultInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1TestCaseResultInput, _super);
    function GoogleCloudDialogflowCxV3beta1TestCaseResultInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationTurns", elemType: GoogleCloudDialogflowCxV3beta1ConversationTurnInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1TestCaseResultInput.prototype, "conversationTurns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestCaseResultInput.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestCaseResultInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testResult" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestCaseResultInput.prototype, "testResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestCaseResultInput.prototype, "testTime", void 0);
    return GoogleCloudDialogflowCxV3beta1TestCaseResultInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1TestCaseResultInput };
// GoogleCloudDialogflowCxV3beta1TestCaseResult
/**
 * Represents a result from running a test case in an agent environment.
**/
var GoogleCloudDialogflowCxV3beta1TestCaseResult = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1TestCaseResult, _super);
    function GoogleCloudDialogflowCxV3beta1TestCaseResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationTurns", elemType: GoogleCloudDialogflowCxV3beta1ConversationTurn }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1TestCaseResult.prototype, "conversationTurns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestCaseResult.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestCaseResult.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testResult" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestCaseResult.prototype, "testResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestCaseResult.prototype, "testTime", void 0);
    return GoogleCloudDialogflowCxV3beta1TestCaseResult;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1TestCaseResult };
