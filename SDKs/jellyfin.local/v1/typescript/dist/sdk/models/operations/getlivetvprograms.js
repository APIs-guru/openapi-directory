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
var GetLiveTvProgramsQueryParams = /** @class */ (function (_super) {
    __extends(GetLiveTvProgramsQueryParams, _super);
    function GetLiveTvProgramsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channelIds" }),
        __metadata("design:type", Array)
    ], GetLiveTvProgramsQueryParams.prototype, "channelIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" }),
        __metadata("design:type", Array)
    ], GetLiveTvProgramsQueryParams.prototype, "enableImageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvProgramsQueryParams.prototype, "enableImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableTotalRecordCount" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvProgramsQueryParams.prototype, "enableTotalRecordCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvProgramsQueryParams.prototype, "enableUserData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetLiveTvProgramsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genreIds" }),
        __metadata("design:type", Array)
    ], GetLiveTvProgramsQueryParams.prototype, "genreIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genres" }),
        __metadata("design:type", Array)
    ], GetLiveTvProgramsQueryParams.prototype, "genres", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasAired" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvProgramsQueryParams.prototype, "hasAired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" }),
        __metadata("design:type", Number)
    ], GetLiveTvProgramsQueryParams.prototype, "imageTypeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isAiring" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvProgramsQueryParams.prototype, "isAiring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isKids" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvProgramsQueryParams.prototype, "isKids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMovie" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvProgramsQueryParams.prototype, "isMovie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isNews" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvProgramsQueryParams.prototype, "isNews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isSeries" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvProgramsQueryParams.prototype, "isSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isSports" }),
        __metadata("design:type", Boolean)
    ], GetLiveTvProgramsQueryParams.prototype, "isSports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=librarySeriesId" }),
        __metadata("design:type", String)
    ], GetLiveTvProgramsQueryParams.prototype, "librarySeriesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetLiveTvProgramsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxEndDate" }),
        __metadata("design:type", Date)
    ], GetLiveTvProgramsQueryParams.prototype, "maxEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxStartDate" }),
        __metadata("design:type", Date)
    ], GetLiveTvProgramsQueryParams.prototype, "maxStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minEndDate" }),
        __metadata("design:type", Date)
    ], GetLiveTvProgramsQueryParams.prototype, "minEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minStartDate" }),
        __metadata("design:type", Date)
    ], GetLiveTvProgramsQueryParams.prototype, "minStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seriesTimerId" }),
        __metadata("design:type", String)
    ], GetLiveTvProgramsQueryParams.prototype, "seriesTimerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetLiveTvProgramsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetLiveTvProgramsQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetLiveTvProgramsQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetLiveTvProgramsQueryParams.prototype, "userId", void 0);
    return GetLiveTvProgramsQueryParams;
}(SpeakeasyBase));
export { GetLiveTvProgramsQueryParams };
var GetLiveTvProgramsSecurity = /** @class */ (function (_super) {
    __extends(GetLiveTvProgramsSecurity, _super);
    function GetLiveTvProgramsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetLiveTvProgramsSecurity.prototype, "customAuthentication", void 0);
    return GetLiveTvProgramsSecurity;
}(SpeakeasyBase));
export { GetLiveTvProgramsSecurity };
var GetLiveTvProgramsRequest = /** @class */ (function (_super) {
    __extends(GetLiveTvProgramsRequest, _super);
    function GetLiveTvProgramsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLiveTvProgramsQueryParams)
    ], GetLiveTvProgramsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLiveTvProgramsSecurity)
    ], GetLiveTvProgramsRequest.prototype, "security", void 0);
    return GetLiveTvProgramsRequest;
}(SpeakeasyBase));
export { GetLiveTvProgramsRequest };
var GetLiveTvProgramsResponse = /** @class */ (function (_super) {
    __extends(GetLiveTvProgramsResponse, _super);
    function GetLiveTvProgramsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetLiveTvProgramsResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLiveTvProgramsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLiveTvProgramsResponse.prototype, "statusCode", void 0);
    return GetLiveTvProgramsResponse;
}(SpeakeasyBase));
export { GetLiveTvProgramsResponse };
