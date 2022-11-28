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
import { GoogleCloudDialogflowCxV3beta1TestCaseResultInput } from "./googleclouddialogflowcxv3beta1testcaseresult";
import { GoogleCloudDialogflowCxV3beta1ConversationTurnInput } from "./googleclouddialogflowcxv3beta1conversationturn";
import { GoogleCloudDialogflowCxV3beta1TestConfig } from "./googleclouddialogflowcxv3beta1testconfig";
import { GoogleCloudDialogflowCxV3beta1TestCaseResult } from "./googleclouddialogflowcxv3beta1testcaseresult";
import { GoogleCloudDialogflowCxV3beta1ConversationTurn } from "./googleclouddialogflowcxv3beta1conversationturn";
// GoogleCloudDialogflowCxV3beta1TestCaseInput
/**
 * Represents a test case.
**/
var GoogleCloudDialogflowCxV3beta1TestCaseInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1TestCaseInput, _super);
    function GoogleCloudDialogflowCxV3beta1TestCaseInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestCaseInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastTestResult" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1TestCaseResultInput)
    ], GoogleCloudDialogflowCxV3beta1TestCaseInput.prototype, "lastTestResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestCaseInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestCaseInput.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1TestCaseInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testCaseConversationTurns", elemType: GoogleCloudDialogflowCxV3beta1ConversationTurnInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1TestCaseInput.prototype, "testCaseConversationTurns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testConfig" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1TestConfig)
    ], GoogleCloudDialogflowCxV3beta1TestCaseInput.prototype, "testConfig", void 0);
    return GoogleCloudDialogflowCxV3beta1TestCaseInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1TestCaseInput };
// GoogleCloudDialogflowCxV3beta1TestCase
/**
 * Represents a test case.
**/
var GoogleCloudDialogflowCxV3beta1TestCase = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1TestCase, _super);
    function GoogleCloudDialogflowCxV3beta1TestCase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestCase.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestCase.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastTestResult" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1TestCaseResult)
    ], GoogleCloudDialogflowCxV3beta1TestCase.prototype, "lastTestResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestCase.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestCase.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1TestCase.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testCaseConversationTurns", elemType: GoogleCloudDialogflowCxV3beta1ConversationTurn }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1TestCase.prototype, "testCaseConversationTurns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testConfig" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1TestConfig)
    ], GoogleCloudDialogflowCxV3beta1TestCase.prototype, "testConfig", void 0);
    return GoogleCloudDialogflowCxV3beta1TestCase;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1TestCase };
