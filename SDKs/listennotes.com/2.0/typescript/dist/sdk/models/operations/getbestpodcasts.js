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
var GetBestPodcastsQueryParams = /** @class */ (function (_super) {
    __extends(GetBestPodcastsQueryParams, _super);
    function GetBestPodcastsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genre_id" }),
        __metadata("design:type", String)
    ], GetBestPodcastsQueryParams.prototype, "genreId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetBestPodcastsQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetBestPodcastsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=publisher_region" }),
        __metadata("design:type", String)
    ], GetBestPodcastsQueryParams.prototype, "publisherRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" }),
        __metadata("design:type", String)
    ], GetBestPodcastsQueryParams.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe_mode" }),
        __metadata("design:type", Number)
    ], GetBestPodcastsQueryParams.prototype, "safeMode", void 0);
    return GetBestPodcastsQueryParams;
}(SpeakeasyBase));
export { GetBestPodcastsQueryParams };
var GetBestPodcastsHeaders = /** @class */ (function (_super) {
    __extends(GetBestPodcastsHeaders, _super);
    function GetBestPodcastsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" }),
        __metadata("design:type", String)
    ], GetBestPodcastsHeaders.prototype, "xListenApiKey", void 0);
    return GetBestPodcastsHeaders;
}(SpeakeasyBase));
export { GetBestPodcastsHeaders };
var GetBestPodcastsRequest = /** @class */ (function (_super) {
    __extends(GetBestPodcastsRequest, _super);
    function GetBestPodcastsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBestPodcastsQueryParams)
    ], GetBestPodcastsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBestPodcastsHeaders)
    ], GetBestPodcastsRequest.prototype, "headers", void 0);
    return GetBestPodcastsRequest;
}(SpeakeasyBase));
export { GetBestPodcastsRequest };
var GetBestPodcastsResponse = /** @class */ (function (_super) {
    __extends(GetBestPodcastsResponse, _super);
    function GetBestPodcastsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BestPodcastsResponse)
    ], GetBestPodcastsResponse.prototype, "bestPodcastsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBestPodcastsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetBestPodcastsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBestPodcastsResponse.prototype, "statusCode", void 0);
    return GetBestPodcastsResponse;
}(SpeakeasyBase));
export { GetBestPodcastsResponse };
