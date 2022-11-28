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
var ChangeRecoveryQuestionPathParams = /** @class */ (function (_super) {
    __extends(ChangeRecoveryQuestionPathParams, _super);
    function ChangeRecoveryQuestionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], ChangeRecoveryQuestionPathParams.prototype, "userId", void 0);
    return ChangeRecoveryQuestionPathParams;
}(SpeakeasyBase));
export { ChangeRecoveryQuestionPathParams };
var ChangeRecoveryQuestionRequestBodyPassword = /** @class */ (function (_super) {
    __extends(ChangeRecoveryQuestionRequestBodyPassword, _super);
    function ChangeRecoveryQuestionRequestBodyPassword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ChangeRecoveryQuestionRequestBodyPassword.prototype, "value", void 0);
    return ChangeRecoveryQuestionRequestBodyPassword;
}(SpeakeasyBase));
export { ChangeRecoveryQuestionRequestBodyPassword };
var ChangeRecoveryQuestionRequestBodyRecoveryQuestion = /** @class */ (function (_super) {
    __extends(ChangeRecoveryQuestionRequestBodyRecoveryQuestion, _super);
    function ChangeRecoveryQuestionRequestBodyRecoveryQuestion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answer" }),
        __metadata("design:type", String)
    ], ChangeRecoveryQuestionRequestBodyRecoveryQuestion.prototype, "answer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=question" }),
        __metadata("design:type", String)
    ], ChangeRecoveryQuestionRequestBodyRecoveryQuestion.prototype, "question", void 0);
    return ChangeRecoveryQuestionRequestBodyRecoveryQuestion;
}(SpeakeasyBase));
export { ChangeRecoveryQuestionRequestBodyRecoveryQuestion };
var ChangeRecoveryQuestionRequestBody = /** @class */ (function (_super) {
    __extends(ChangeRecoveryQuestionRequestBody, _super);
    function ChangeRecoveryQuestionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", ChangeRecoveryQuestionRequestBodyPassword)
    ], ChangeRecoveryQuestionRequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recovery_question" }),
        __metadata("design:type", ChangeRecoveryQuestionRequestBodyRecoveryQuestion)
    ], ChangeRecoveryQuestionRequestBody.prototype, "recoveryQuestion", void 0);
    return ChangeRecoveryQuestionRequestBody;
}(SpeakeasyBase));
export { ChangeRecoveryQuestionRequestBody };
var ChangeRecoveryQuestionRequest = /** @class */ (function (_super) {
    __extends(ChangeRecoveryQuestionRequest, _super);
    function ChangeRecoveryQuestionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChangeRecoveryQuestionPathParams)
    ], ChangeRecoveryQuestionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ChangeRecoveryQuestionRequestBody)
    ], ChangeRecoveryQuestionRequest.prototype, "request", void 0);
    return ChangeRecoveryQuestionRequest;
}(SpeakeasyBase));
export { ChangeRecoveryQuestionRequest };
var ChangeRecoveryQuestionResponse = /** @class */ (function (_super) {
    __extends(ChangeRecoveryQuestionResponse, _super);
    function ChangeRecoveryQuestionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChangeRecoveryQuestionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChangeRecoveryQuestionResponse.prototype, "statusCode", void 0);
    return ChangeRecoveryQuestionResponse;
}(SpeakeasyBase));
export { ChangeRecoveryQuestionResponse };
