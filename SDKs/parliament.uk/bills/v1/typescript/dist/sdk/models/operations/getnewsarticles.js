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
var GetNewsArticlesPathParams = /** @class */ (function (_super) {
    __extends(GetNewsArticlesPathParams, _super);
    function GetNewsArticlesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" }),
        __metadata("design:type", Number)
    ], GetNewsArticlesPathParams.prototype, "billId", void 0);
    return GetNewsArticlesPathParams;
}(SpeakeasyBase));
export { GetNewsArticlesPathParams };
var GetNewsArticlesQueryParams = /** @class */ (function (_super) {
    __extends(GetNewsArticlesQueryParams, _super);
    function GetNewsArticlesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Skip" }),
        __metadata("design:type", Number)
    ], GetNewsArticlesQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Take" }),
        __metadata("design:type", Number)
    ], GetNewsArticlesQueryParams.prototype, "take", void 0);
    return GetNewsArticlesQueryParams;
}(SpeakeasyBase));
export { GetNewsArticlesQueryParams };
var GetNewsArticlesRequest = /** @class */ (function (_super) {
    __extends(GetNewsArticlesRequest, _super);
    function GetNewsArticlesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNewsArticlesPathParams)
    ], GetNewsArticlesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNewsArticlesQueryParams)
    ], GetNewsArticlesRequest.prototype, "queryParams", void 0);
    return GetNewsArticlesRequest;
}(SpeakeasyBase));
export { GetNewsArticlesRequest };
var GetNewsArticlesResponse = /** @class */ (function (_super) {
    __extends(GetNewsArticlesResponse, _super);
    function GetNewsArticlesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetNewsArticlesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNewsArticlesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NewsArticlesSummarySearchResult)
    ], GetNewsArticlesResponse.prototype, "newsArticlesSummarySearchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNewsArticlesResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNewsArticlesResponse.prototype, "statusCode", void 0);
    return GetNewsArticlesResponse;
}(SpeakeasyBase));
export { GetNewsArticlesResponse };
