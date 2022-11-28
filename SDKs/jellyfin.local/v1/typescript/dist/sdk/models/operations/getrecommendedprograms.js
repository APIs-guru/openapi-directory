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
var GetRecommendedProgramsQueryParams = /** @class */ (function (_super) {
    __extends(GetRecommendedProgramsQueryParams, _super);
    function GetRecommendedProgramsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" }),
        __metadata("design:type", Array)
    ], GetRecommendedProgramsQueryParams.prototype, "enableImageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" }),
        __metadata("design:type", Boolean)
    ], GetRecommendedProgramsQueryParams.prototype, "enableImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableTotalRecordCount" }),
        __metadata("design:type", Boolean)
    ], GetRecommendedProgramsQueryParams.prototype, "enableTotalRecordCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" }),
        __metadata("design:type", Boolean)
    ], GetRecommendedProgramsQueryParams.prototype, "enableUserData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetRecommendedProgramsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genreIds" }),
        __metadata("design:type", Array)
    ], GetRecommendedProgramsQueryParams.prototype, "genreIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasAired" }),
        __metadata("design:type", Boolean)
    ], GetRecommendedProgramsQueryParams.prototype, "hasAired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" }),
        __metadata("design:type", Number)
    ], GetRecommendedProgramsQueryParams.prototype, "imageTypeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isAiring" }),
        __metadata("design:type", Boolean)
    ], GetRecommendedProgramsQueryParams.prototype, "isAiring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isKids" }),
        __metadata("design:type", Boolean)
    ], GetRecommendedProgramsQueryParams.prototype, "isKids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMovie" }),
        __metadata("design:type", Boolean)
    ], GetRecommendedProgramsQueryParams.prototype, "isMovie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isNews" }),
        __metadata("design:type", Boolean)
    ], GetRecommendedProgramsQueryParams.prototype, "isNews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isSeries" }),
        __metadata("design:type", Boolean)
    ], GetRecommendedProgramsQueryParams.prototype, "isSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isSports" }),
        __metadata("design:type", Boolean)
    ], GetRecommendedProgramsQueryParams.prototype, "isSports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetRecommendedProgramsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetRecommendedProgramsQueryParams.prototype, "userId", void 0);
    return GetRecommendedProgramsQueryParams;
}(SpeakeasyBase));
export { GetRecommendedProgramsQueryParams };
var GetRecommendedProgramsSecurity = /** @class */ (function (_super) {
    __extends(GetRecommendedProgramsSecurity, _super);
    function GetRecommendedProgramsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetRecommendedProgramsSecurity.prototype, "customAuthentication", void 0);
    return GetRecommendedProgramsSecurity;
}(SpeakeasyBase));
export { GetRecommendedProgramsSecurity };
var GetRecommendedProgramsRequest = /** @class */ (function (_super) {
    __extends(GetRecommendedProgramsRequest, _super);
    function GetRecommendedProgramsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRecommendedProgramsQueryParams)
    ], GetRecommendedProgramsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRecommendedProgramsSecurity)
    ], GetRecommendedProgramsRequest.prototype, "security", void 0);
    return GetRecommendedProgramsRequest;
}(SpeakeasyBase));
export { GetRecommendedProgramsRequest };
var GetRecommendedProgramsResponse = /** @class */ (function (_super) {
    __extends(GetRecommendedProgramsResponse, _super);
    function GetRecommendedProgramsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetRecommendedProgramsResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRecommendedProgramsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRecommendedProgramsResponse.prototype, "statusCode", void 0);
    return GetRecommendedProgramsResponse;
}(SpeakeasyBase));
export { GetRecommendedProgramsResponse };
