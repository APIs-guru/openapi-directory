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
var RequestReviewPathParams = /** @class */ (function (_super) {
    __extends(RequestReviewPathParams, _super);
    function RequestReviewPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-id" }),
        __metadata("design:type", Number)
    ], RequestReviewPathParams.prototype, "projectId", void 0);
    return RequestReviewPathParams;
}(SpeakeasyBase));
export { RequestReviewPathParams };
var RequestReviewQueryParams = /** @class */ (function (_super) {
    __extends(RequestReviewQueryParams, _super);
    function RequestReviewQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base" }),
        __metadata("design:type", String)
    ], RequestReviewQueryParams.prototype, "base", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback-secret" }),
        __metadata("design:type", String)
    ], RequestReviewQueryParams.prototype, "callbackSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback-url" }),
        __metadata("design:type", String)
    ], RequestReviewQueryParams.prototype, "callbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=external-id" }),
        __metadata("design:type", Number)
    ], RequestReviewQueryParams.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=review-url" }),
        __metadata("design:type", String)
    ], RequestReviewQueryParams.prototype, "reviewUrl", void 0);
    return RequestReviewQueryParams;
}(SpeakeasyBase));
export { RequestReviewQueryParams };
var RequestReviewSecurity = /** @class */ (function (_super) {
    __extends(RequestReviewSecurity, _super);
    function RequestReviewSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeAccessToken)
    ], RequestReviewSecurity.prototype, "accessToken", void 0);
    return RequestReviewSecurity;
}(SpeakeasyBase));
export { RequestReviewSecurity };
var RequestReviewRequest = /** @class */ (function (_super) {
    __extends(RequestReviewRequest, _super);
    function RequestReviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestReviewPathParams)
    ], RequestReviewRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestReviewQueryParams)
    ], RequestReviewRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], RequestReviewRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestReviewSecurity)
    ], RequestReviewRequest.prototype, "security", void 0);
    return RequestReviewRequest;
}(SpeakeasyBase));
export { RequestReviewRequest };
var RequestReviewResponse = /** @class */ (function (_super) {
    __extends(RequestReviewResponse, _super);
    function RequestReviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestReviewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestReviewResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], RequestReviewResponse.prototype, "operation", void 0);
    return RequestReviewResponse;
}(SpeakeasyBase));
export { RequestReviewResponse };
