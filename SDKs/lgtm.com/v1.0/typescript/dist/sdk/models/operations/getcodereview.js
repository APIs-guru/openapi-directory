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
var GetCodeReviewPathParams = /** @class */ (function (_super) {
    __extends(GetCodeReviewPathParams, _super);
    function GetCodeReviewPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=review-id" }),
        __metadata("design:type", String)
    ], GetCodeReviewPathParams.prototype, "reviewId", void 0);
    return GetCodeReviewPathParams;
}(SpeakeasyBase));
export { GetCodeReviewPathParams };
var GetCodeReviewSecurity = /** @class */ (function (_super) {
    __extends(GetCodeReviewSecurity, _super);
    function GetCodeReviewSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeAccessToken)
    ], GetCodeReviewSecurity.prototype, "accessToken", void 0);
    return GetCodeReviewSecurity;
}(SpeakeasyBase));
export { GetCodeReviewSecurity };
var GetCodeReviewRequest = /** @class */ (function (_super) {
    __extends(GetCodeReviewRequest, _super);
    function GetCodeReviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCodeReviewPathParams)
    ], GetCodeReviewRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCodeReviewSecurity)
    ], GetCodeReviewRequest.prototype, "security", void 0);
    return GetCodeReviewRequest;
}(SpeakeasyBase));
export { GetCodeReviewRequest };
var GetCodeReviewResponse = /** @class */ (function (_super) {
    __extends(GetCodeReviewResponse, _super);
    function GetCodeReviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCodeReviewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCodeReviewResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.CodeReview }),
        __metadata("design:type", Array)
    ], GetCodeReviewResponse.prototype, "codeReviews", void 0);
    return GetCodeReviewResponse;
}(SpeakeasyBase));
export { GetCodeReviewResponse };
