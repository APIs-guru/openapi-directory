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
var GetMovieRecommendationsQueryParams = /** @class */ (function (_super) {
    __extends(GetMovieRecommendationsQueryParams, _super);
    function GetMovieRecommendationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categoryLimit" }),
        __metadata("design:type", Number)
    ], GetMovieRecommendationsQueryParams.prototype, "categoryLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetMovieRecommendationsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemLimit" }),
        __metadata("design:type", Number)
    ], GetMovieRecommendationsQueryParams.prototype, "itemLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentId" }),
        __metadata("design:type", String)
    ], GetMovieRecommendationsQueryParams.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetMovieRecommendationsQueryParams.prototype, "userId", void 0);
    return GetMovieRecommendationsQueryParams;
}(SpeakeasyBase));
export { GetMovieRecommendationsQueryParams };
var GetMovieRecommendationsSecurity = /** @class */ (function (_super) {
    __extends(GetMovieRecommendationsSecurity, _super);
    function GetMovieRecommendationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetMovieRecommendationsSecurity.prototype, "customAuthentication", void 0);
    return GetMovieRecommendationsSecurity;
}(SpeakeasyBase));
export { GetMovieRecommendationsSecurity };
var GetMovieRecommendationsRequest = /** @class */ (function (_super) {
    __extends(GetMovieRecommendationsRequest, _super);
    function GetMovieRecommendationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMovieRecommendationsQueryParams)
    ], GetMovieRecommendationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMovieRecommendationsSecurity)
    ], GetMovieRecommendationsRequest.prototype, "security", void 0);
    return GetMovieRecommendationsRequest;
}(SpeakeasyBase));
export { GetMovieRecommendationsRequest };
var GetMovieRecommendationsResponse = /** @class */ (function (_super) {
    __extends(GetMovieRecommendationsResponse, _super);
    function GetMovieRecommendationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMovieRecommendationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.RecommendationDto }),
        __metadata("design:type", Array)
    ], GetMovieRecommendationsResponse.prototype, "recommendationDtos", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMovieRecommendationsResponse.prototype, "statusCode", void 0);
    return GetMovieRecommendationsResponse;
}(SpeakeasyBase));
export { GetMovieRecommendationsResponse };
