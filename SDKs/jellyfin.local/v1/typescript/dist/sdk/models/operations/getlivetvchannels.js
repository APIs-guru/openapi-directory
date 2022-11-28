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
var GetLiveTvChannelsQueryParams = /** @class */ (function (_super) {
    __extends(GetLiveTvChannelsQueryParams, _super);
    function GetLiveTvChannelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addCurrentProgram" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvChannelsQueryParams.prototype, "addCurrentProgram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableFavoriteSorting" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvChannelsQueryParams.prototype, "enableFavoriteSorting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" }),
        __metadata("design:type", Array)
    ], GetLiveTvChannelsQueryParams.prototype, "enableImageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvChannelsQueryParams.prototype, "enableImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvChannelsQueryParams.prototype, "enableUserData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetLiveTvChannelsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" }),
        __metadata("design:type", Number)
    ], GetLiveTvChannelsQueryParams.prototype, "imageTypeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isDisliked" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvChannelsQueryParams.prototype, "isDisliked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isFavorite" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvChannelsQueryParams.prototype, "isFavorite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isKids" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvChannelsQueryParams.prototype, "isKids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isLiked" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvChannelsQueryParams.prototype, "isLiked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMovie" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvChannelsQueryParams.prototype, "isMovie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isNews" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvChannelsQueryParams.prototype, "isNews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isSeries" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvChannelsQueryParams.prototype, "isSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isSports" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvChannelsQueryParams.prototype, "isSports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetLiveTvChannelsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", Array)
    ], GetLiveTvChannelsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetLiveTvChannelsQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetLiveTvChannelsQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetLiveTvChannelsQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetLiveTvChannelsQueryParams.prototype, "userId", void 0);
    return GetLiveTvChannelsQueryParams;
}(SpeakeasyBase));
export { GetLiveTvChannelsQueryParams };
var GetLiveTvChannelsSecurity = /** @class */ (function (_super) {
    __extends(GetLiveTvChannelsSecurity, _super);
    function GetLiveTvChannelsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetLiveTvChannelsSecurity.prototype, "customAuthentication", void 0);
    return GetLiveTvChannelsSecurity;
}(SpeakeasyBase));
export { GetLiveTvChannelsSecurity };
var GetLiveTvChannelsRequest = /** @class */ (function (_super) {
    __extends(GetLiveTvChannelsRequest, _super);
    function GetLiveTvChannelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLiveTvChannelsQueryParams)
    ], GetLiveTvChannelsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLiveTvChannelsSecurity)
    ], GetLiveTvChannelsRequest.prototype, "security", void 0);
    return GetLiveTvChannelsRequest;
}(SpeakeasyBase));
export { GetLiveTvChannelsRequest };
var GetLiveTvChannelsResponse = /** @class */ (function (_super) {
    __extends(GetLiveTvChannelsResponse, _super);
    function GetLiveTvChannelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetLiveTvChannelsResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLiveTvChannelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLiveTvChannelsResponse.prototype, "statusCode", void 0);
    return GetLiveTvChannelsResponse;
}(SpeakeasyBase));
export { GetLiveTvChannelsResponse };
