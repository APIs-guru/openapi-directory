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
import * as shared from "../shared";
var PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity = /** @class */ (function (_super) {
    __extends(PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity, _super);
    function PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity.prototype, "oauth2Legacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity.prototype, "privateAppsLegacy", void 0);
    return PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity;
}(SpeakeasyBase));
export { PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity };
var PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest = /** @class */ (function (_super) {
    __extends(PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest, _super);
    function PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchInputCallbackCompletionBatchRequest)
    ], PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity)
    ], PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest.prototype, "security", void 0);
    return PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest;
}(SpeakeasyBase));
export { PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest };
var PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse = /** @class */ (function (_super) {
    __extends(PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse, _super);
    function PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse.prototype, "statusCode", void 0);
    return PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse;
}(SpeakeasyBase));
export { PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse };
