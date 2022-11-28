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
var GetSimilarMoviesPathParams = /** @class */ (function (_super) {
    __extends(GetSimilarMoviesPathParams, _super);
    function GetSimilarMoviesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetSimilarMoviesPathParams.prototype, "itemId", void 0);
    return GetSimilarMoviesPathParams;
}(SpeakeasyBase));
export { GetSimilarMoviesPathParams };
var GetSimilarMoviesQueryParams = /** @class */ (function (_super) {
    __extends(GetSimilarMoviesQueryParams, _super);
    function GetSimilarMoviesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeArtistIds" }),
        __metadata("design:type", Array)
    ], GetSimilarMoviesQueryParams.prototype, "excludeArtistIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetSimilarMoviesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSimilarMoviesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetSimilarMoviesQueryParams.prototype, "userId", void 0);
    return GetSimilarMoviesQueryParams;
}(SpeakeasyBase));
export { GetSimilarMoviesQueryParams };
var GetSimilarMoviesSecurity = /** @class */ (function (_super) {
    __extends(GetSimilarMoviesSecurity, _super);
    function GetSimilarMoviesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetSimilarMoviesSecurity.prototype, "customAuthentication", void 0);
    return GetSimilarMoviesSecurity;
}(SpeakeasyBase));
export { GetSimilarMoviesSecurity };
var GetSimilarMoviesRequest = /** @class */ (function (_super) {
    __extends(GetSimilarMoviesRequest, _super);
    function GetSimilarMoviesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSimilarMoviesPathParams)
    ], GetSimilarMoviesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSimilarMoviesQueryParams)
    ], GetSimilarMoviesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSimilarMoviesSecurity)
    ], GetSimilarMoviesRequest.prototype, "security", void 0);
    return GetSimilarMoviesRequest;
}(SpeakeasyBase));
export { GetSimilarMoviesRequest };
var GetSimilarMoviesResponse = /** @class */ (function (_super) {
    __extends(GetSimilarMoviesResponse, _super);
    function GetSimilarMoviesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetSimilarMoviesResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSimilarMoviesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSimilarMoviesResponse.prototype, "statusCode", void 0);
    return GetSimilarMoviesResponse;
}(SpeakeasyBase));
export { GetSimilarMoviesResponse };
