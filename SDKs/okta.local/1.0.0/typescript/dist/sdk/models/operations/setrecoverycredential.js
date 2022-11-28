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
var SetRecoveryCredentialPathParams = /** @class */ (function (_super) {
    __extends(SetRecoveryCredentialPathParams, _super);
    function SetRecoveryCredentialPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], SetRecoveryCredentialPathParams.prototype, "userId", void 0);
    return SetRecoveryCredentialPathParams;
}(SpeakeasyBase));
export { SetRecoveryCredentialPathParams };
var SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion = /** @class */ (function (_super) {
    __extends(SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion, _super);
    function SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answer" }),
        __metadata("design:type", String)
    ], SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion.prototype, "answer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=question" }),
        __metadata("design:type", String)
    ], SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion.prototype, "question", void 0);
    return SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion;
}(SpeakeasyBase));
export { SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion };
var SetRecoveryCredentialRequestBodyCredentials = /** @class */ (function (_super) {
    __extends(SetRecoveryCredentialRequestBodyCredentials, _super);
    function SetRecoveryCredentialRequestBodyCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recovery_question" }),
        __metadata("design:type", SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion)
    ], SetRecoveryCredentialRequestBodyCredentials.prototype, "recoveryQuestion", void 0);
    return SetRecoveryCredentialRequestBodyCredentials;
}(SpeakeasyBase));
export { SetRecoveryCredentialRequestBodyCredentials };
var SetRecoveryCredentialRequestBody = /** @class */ (function (_super) {
    __extends(SetRecoveryCredentialRequestBody, _super);
    function SetRecoveryCredentialRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentials" }),
        __metadata("design:type", SetRecoveryCredentialRequestBodyCredentials)
    ], SetRecoveryCredentialRequestBody.prototype, "credentials", void 0);
    return SetRecoveryCredentialRequestBody;
}(SpeakeasyBase));
export { SetRecoveryCredentialRequestBody };
var SetRecoveryCredentialRequest = /** @class */ (function (_super) {
    __extends(SetRecoveryCredentialRequest, _super);
    function SetRecoveryCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetRecoveryCredentialPathParams)
    ], SetRecoveryCredentialRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SetRecoveryCredentialRequestBody)
    ], SetRecoveryCredentialRequest.prototype, "request", void 0);
    return SetRecoveryCredentialRequest;
}(SpeakeasyBase));
export { SetRecoveryCredentialRequest };
var SetRecoveryCredentialResponse = /** @class */ (function (_super) {
    __extends(SetRecoveryCredentialResponse, _super);
    function SetRecoveryCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetRecoveryCredentialResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetRecoveryCredentialResponse.prototype, "statusCode", void 0);
    return SetRecoveryCredentialResponse;
}(SpeakeasyBase));
export { SetRecoveryCredentialResponse };
