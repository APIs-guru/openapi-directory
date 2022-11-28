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
var ForgotPasswordOneTimeCodePathParams = /** @class */ (function (_super) {
    __extends(ForgotPasswordOneTimeCodePathParams, _super);
    function ForgotPasswordOneTimeCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], ForgotPasswordOneTimeCodePathParams.prototype, "userId", void 0);
    return ForgotPasswordOneTimeCodePathParams;
}(SpeakeasyBase));
export { ForgotPasswordOneTimeCodePathParams };
var ForgotPasswordOneTimeCodeQueryParams = /** @class */ (function (_super) {
    __extends(ForgotPasswordOneTimeCodeQueryParams, _super);
    function ForgotPasswordOneTimeCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendEmail" }),
        __metadata("design:type", String)
    ], ForgotPasswordOneTimeCodeQueryParams.prototype, "sendEmail", void 0);
    return ForgotPasswordOneTimeCodeQueryParams;
}(SpeakeasyBase));
export { ForgotPasswordOneTimeCodeQueryParams };
var ForgotPasswordOneTimeCodeRequest = /** @class */ (function (_super) {
    __extends(ForgotPasswordOneTimeCodeRequest, _super);
    function ForgotPasswordOneTimeCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ForgotPasswordOneTimeCodePathParams)
    ], ForgotPasswordOneTimeCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ForgotPasswordOneTimeCodeQueryParams)
    ], ForgotPasswordOneTimeCodeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/plain" }),
        __metadata("design:type", Uint8Array)
    ], ForgotPasswordOneTimeCodeRequest.prototype, "request", void 0);
    return ForgotPasswordOneTimeCodeRequest;
}(SpeakeasyBase));
export { ForgotPasswordOneTimeCodeRequest };
var ForgotPasswordOneTimeCodeResponse = /** @class */ (function (_super) {
    __extends(ForgotPasswordOneTimeCodeResponse, _super);
    function ForgotPasswordOneTimeCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ForgotPasswordOneTimeCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ForgotPasswordOneTimeCodeResponse.prototype, "statusCode", void 0);
    return ForgotPasswordOneTimeCodeResponse;
}(SpeakeasyBase));
export { ForgotPasswordOneTimeCodeResponse };
