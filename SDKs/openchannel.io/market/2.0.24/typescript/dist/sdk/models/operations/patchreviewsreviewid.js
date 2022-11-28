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
var PatchReviewsReviewIdPathParams = /** @class */ (function (_super) {
    __extends(PatchReviewsReviewIdPathParams, _super);
    function PatchReviewsReviewIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reviewId" }),
        __metadata("design:type", String)
    ], PatchReviewsReviewIdPathParams.prototype, "reviewId", void 0);
    return PatchReviewsReviewIdPathParams;
}(SpeakeasyBase));
export { PatchReviewsReviewIdPathParams };
var PatchReviewsReviewIdQueryParams = /** @class */ (function (_super) {
    __extends(PatchReviewsReviewIdQueryParams, _super);
    function PatchReviewsReviewIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" }),
        __metadata("design:type", String)
    ], PatchReviewsReviewIdQueryParams.prototype, "customData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], PatchReviewsReviewIdQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=headline" }),
        __metadata("design:type", String)
    ], PatchReviewsReviewIdQueryParams.prototype, "headline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" }),
        __metadata("design:type", Number)
    ], PatchReviewsReviewIdQueryParams.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userAccountId" }),
        __metadata("design:type", String)
    ], PatchReviewsReviewIdQueryParams.prototype, "userAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], PatchReviewsReviewIdQueryParams.prototype, "userId", void 0);
    return PatchReviewsReviewIdQueryParams;
}(SpeakeasyBase));
export { PatchReviewsReviewIdQueryParams };
var PatchReviewsReviewIdRequest = /** @class */ (function (_super) {
    __extends(PatchReviewsReviewIdRequest, _super);
    function PatchReviewsReviewIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchReviewsReviewIdPathParams)
    ], PatchReviewsReviewIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchReviewsReviewIdQueryParams)
    ], PatchReviewsReviewIdRequest.prototype, "queryParams", void 0);
    return PatchReviewsReviewIdRequest;
}(SpeakeasyBase));
export { PatchReviewsReviewIdRequest };
var PatchReviewsReviewIdResponse = /** @class */ (function (_super) {
    __extends(PatchReviewsReviewIdResponse, _super);
    function PatchReviewsReviewIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PatchReviewsReviewIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchReviewsReviewIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchReviewsReviewIdResponse.prototype, "statusCode", void 0);
    return PatchReviewsReviewIdResponse;
}(SpeakeasyBase));
export { PatchReviewsReviewIdResponse };
