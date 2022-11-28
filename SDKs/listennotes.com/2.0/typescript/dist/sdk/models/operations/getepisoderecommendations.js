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
var GetEpisodeRecommendationsPathParams = /** @class */ (function (_super) {
    __extends(GetEpisodeRecommendationsPathParams, _super);
    function GetEpisodeRecommendationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetEpisodeRecommendationsPathParams.prototype, "id", void 0);
    return GetEpisodeRecommendationsPathParams;
}(SpeakeasyBase));
export { GetEpisodeRecommendationsPathParams };
var GetEpisodeRecommendationsQueryParams = /** @class */ (function (_super) {
    __extends(GetEpisodeRecommendationsQueryParams, _super);
    function GetEpisodeRecommendationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe_mode" }),
        __metadata("design:type", Number)
    ], GetEpisodeRecommendationsQueryParams.prototype, "safeMode", void 0);
    return GetEpisodeRecommendationsQueryParams;
}(SpeakeasyBase));
export { GetEpisodeRecommendationsQueryParams };
var GetEpisodeRecommendationsHeaders = /** @class */ (function (_super) {
    __extends(GetEpisodeRecommendationsHeaders, _super);
    function GetEpisodeRecommendationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" }),
        __metadata("design:type", String)
    ], GetEpisodeRecommendationsHeaders.prototype, "xListenApiKey", void 0);
    return GetEpisodeRecommendationsHeaders;
}(SpeakeasyBase));
export { GetEpisodeRecommendationsHeaders };
var GetEpisodeRecommendationsRequest = /** @class */ (function (_super) {
    __extends(GetEpisodeRecommendationsRequest, _super);
    function GetEpisodeRecommendationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEpisodeRecommendationsPathParams)
    ], GetEpisodeRecommendationsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEpisodeRecommendationsQueryParams)
    ], GetEpisodeRecommendationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEpisodeRecommendationsHeaders)
    ], GetEpisodeRecommendationsRequest.prototype, "headers", void 0);
    return GetEpisodeRecommendationsRequest;
}(SpeakeasyBase));
export { GetEpisodeRecommendationsRequest };
var GetEpisodeRecommendationsResponse = /** @class */ (function (_super) {
    __extends(GetEpisodeRecommendationsResponse, _super);
    function GetEpisodeRecommendationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEpisodeRecommendationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetEpisodeRecommendationsResponse)
    ], GetEpisodeRecommendationsResponse.prototype, "getEpisodeRecommendationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetEpisodeRecommendationsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEpisodeRecommendationsResponse.prototype, "statusCode", void 0);
    return GetEpisodeRecommendationsResponse;
}(SpeakeasyBase));
export { GetEpisodeRecommendationsResponse };
