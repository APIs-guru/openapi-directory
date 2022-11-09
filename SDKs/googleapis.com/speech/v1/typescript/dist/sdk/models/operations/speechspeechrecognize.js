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
var SpeechSpeechRecognizeQueryParams = /** @class */ (function (_super) {
    __extends(SpeechSpeechRecognizeQueryParams, _super);
    function SpeechSpeechRecognizeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpeechSpeechRecognizeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpeechSpeechRecognizeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpeechSpeechRecognizeQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpeechSpeechRecognizeQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpeechSpeechRecognizeQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpeechSpeechRecognizeQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpeechSpeechRecognizeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpeechSpeechRecognizeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpeechSpeechRecognizeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpeechSpeechRecognizeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpeechSpeechRecognizeQueryParams.prototype, "uploadProtocol", void 0);
    return SpeechSpeechRecognizeQueryParams;
}(SpeakeasyBase));
export { SpeechSpeechRecognizeQueryParams };
var SpeechSpeechRecognizeSecurity = /** @class */ (function (_super) {
    __extends(SpeechSpeechRecognizeSecurity, _super);
    function SpeechSpeechRecognizeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpeechSpeechRecognizeSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpeechSpeechRecognizeSecurity.prototype, "oauth2c", void 0);
    return SpeechSpeechRecognizeSecurity;
}(SpeakeasyBase));
export { SpeechSpeechRecognizeSecurity };
var SpeechSpeechRecognizeRequest = /** @class */ (function (_super) {
    __extends(SpeechSpeechRecognizeRequest, _super);
    function SpeechSpeechRecognizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SpeechSpeechRecognizeQueryParams)
    ], SpeechSpeechRecognizeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RecognizeRequest)
    ], SpeechSpeechRecognizeRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SpeechSpeechRecognizeSecurity)
    ], SpeechSpeechRecognizeRequest.prototype, "security", void 0);
    return SpeechSpeechRecognizeRequest;
}(SpeakeasyBase));
export { SpeechSpeechRecognizeRequest };
var SpeechSpeechRecognizeResponse = /** @class */ (function (_super) {
    __extends(SpeechSpeechRecognizeResponse, _super);
    function SpeechSpeechRecognizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SpeechSpeechRecognizeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.RecognizeResponse)
    ], SpeechSpeechRecognizeResponse.prototype, "recognizeResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SpeechSpeechRecognizeResponse.prototype, "statusCode", void 0);
    return SpeechSpeechRecognizeResponse;
}(SpeakeasyBase));
export { SpeechSpeechRecognizeResponse };
