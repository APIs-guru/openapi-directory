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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var PostAutomationV4ActionsCallbacksCallbackIdCompleteCompletePathParams = /** @class */ (function (_super) {
    __extends(PostAutomationV4ActionsCallbacksCallbackIdCompleteCompletePathParams, _super);
    function PostAutomationV4ActionsCallbacksCallbackIdCompleteCompletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=callbackId" }),
        __metadata("design:type", String)
    ], PostAutomationV4ActionsCallbacksCallbackIdCompleteCompletePathParams.prototype, "callbackId", void 0);
    return PostAutomationV4ActionsCallbacksCallbackIdCompleteCompletePathParams;
}(SpeakeasyBase));
export { PostAutomationV4ActionsCallbacksCallbackIdCompleteCompletePathParams };
var PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption1, _super);
    function PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption1.prototype, "oauth2Legacy", void 0);
    return PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption1;
}(SpeakeasyBase));
export { PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption1 };
var PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption2, _super);
    function PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption2.prototype, "hapikey", void 0);
    return PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption2;
}(SpeakeasyBase));
export { PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption2 };
var PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity = /** @class */ (function (_super) {
    __extends(PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity, _super);
    function PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption1)
    ], PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption2)
    ], PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity.prototype, "option2", void 0);
    return PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity;
}(SpeakeasyBase));
export { PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity };
var PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest = /** @class */ (function (_super) {
    __extends(PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest, _super);
    function PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostAutomationV4ActionsCallbacksCallbackIdCompleteCompletePathParams)
    ], PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CallbackCompletionRequest)
    ], PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity)
    ], PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest.prototype, "security", void 0);
    return PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest;
}(SpeakeasyBase));
export { PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest };
var PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse = /** @class */ (function (_super) {
    __extends(PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse, _super);
    function PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse.prototype, "statusCode", void 0);
    return PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse;
}(SpeakeasyBase));
export { PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse };
