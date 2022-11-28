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
var GetPodcastRecommendationsPathParams = /** @class */ (function (_super) {
    __extends(GetPodcastRecommendationsPathParams, _super);
    function GetPodcastRecommendationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetPodcastRecommendationsPathParams.prototype, "id", void 0);
    return GetPodcastRecommendationsPathParams;
}(SpeakeasyBase));
export { GetPodcastRecommendationsPathParams };
var GetPodcastRecommendationsQueryParams = /** @class */ (function (_super) {
    __extends(GetPodcastRecommendationsQueryParams, _super);
    function GetPodcastRecommendationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe_mode" }),
        __metadata("design:type", Number)
    ], GetPodcastRecommendationsQueryParams.prototype, "safeMode", void 0);
    return GetPodcastRecommendationsQueryParams;
}(SpeakeasyBase));
export { GetPodcastRecommendationsQueryParams };
var GetPodcastRecommendationsHeaders = /** @class */ (function (_super) {
    __extends(GetPodcastRecommendationsHeaders, _super);
    function GetPodcastRecommendationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" }),
        __metadata("design:type", String)
    ], GetPodcastRecommendationsHeaders.prototype, "xListenApiKey", void 0);
    return GetPodcastRecommendationsHeaders;
}(SpeakeasyBase));
export { GetPodcastRecommendationsHeaders };
var GetPodcastRecommendationsRequest = /** @class */ (function (_super) {
    __extends(GetPodcastRecommendationsRequest, _super);
    function GetPodcastRecommendationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPodcastRecommendationsPathParams)
    ], GetPodcastRecommendationsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPodcastRecommendationsQueryParams)
    ], GetPodcastRecommendationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPodcastRecommendationsHeaders)
    ], GetPodcastRecommendationsRequest.prototype, "headers", void 0);
    return GetPodcastRecommendationsRequest;
}(SpeakeasyBase));
export { GetPodcastRecommendationsRequest };
var GetPodcastRecommendationsResponse = /** @class */ (function (_super) {
    __extends(GetPodcastRecommendationsResponse, _super);
    function GetPodcastRecommendationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPodcastRecommendationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetPodcastRecommendationsResponse)
    ], GetPodcastRecommendationsResponse.prototype, "getPodcastRecommendationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetPodcastRecommendationsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPodcastRecommendationsResponse.prototype, "statusCode", void 0);
    return GetPodcastRecommendationsResponse;
}(SpeakeasyBase));
export { GetPodcastRecommendationsResponse };
