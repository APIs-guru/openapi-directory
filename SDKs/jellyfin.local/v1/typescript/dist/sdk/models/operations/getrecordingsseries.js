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
var GetRecordingsSeriesQueryParams = /** @class */ (function (_super) {
    __extends(GetRecordingsSeriesQueryParams, _super);
    function GetRecordingsSeriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channelId" }),
        __metadata("design:type", String)
    ], GetRecordingsSeriesQueryParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" }),
        __metadata("design:type", Array)
    ], GetRecordingsSeriesQueryParams.prototype, "enableImageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" }),
        __metadata("design:type", Boolean)
    ], GetRecordingsSeriesQueryParams.prototype, "enableImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableTotalRecordCount" }),
        __metadata("design:type", Boolean)
    ], GetRecordingsSeriesQueryParams.prototype, "enableTotalRecordCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" }),
        __metadata("design:type", Boolean)
    ], GetRecordingsSeriesQueryParams.prototype, "enableUserData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetRecordingsSeriesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" }),
        __metadata("design:type", String)
    ], GetRecordingsSeriesQueryParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" }),
        __metadata("design:type", Number)
    ], GetRecordingsSeriesQueryParams.prototype, "imageTypeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isInProgress" }),
        __metadata("design:type", Boolean)
    ], GetRecordingsSeriesQueryParams.prototype, "isInProgress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetRecordingsSeriesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seriesTimerId" }),
        __metadata("design:type", String)
    ], GetRecordingsSeriesQueryParams.prototype, "seriesTimerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetRecordingsSeriesQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetRecordingsSeriesQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetRecordingsSeriesQueryParams.prototype, "userId", void 0);
    return GetRecordingsSeriesQueryParams;
}(SpeakeasyBase));
export { GetRecordingsSeriesQueryParams };
var GetRecordingsSeriesSecurity = /** @class */ (function (_super) {
    __extends(GetRecordingsSeriesSecurity, _super);
    function GetRecordingsSeriesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetRecordingsSeriesSecurity.prototype, "customAuthentication", void 0);
    return GetRecordingsSeriesSecurity;
}(SpeakeasyBase));
export { GetRecordingsSeriesSecurity };
var GetRecordingsSeriesRequest = /** @class */ (function (_super) {
    __extends(GetRecordingsSeriesRequest, _super);
    function GetRecordingsSeriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRecordingsSeriesQueryParams)
    ], GetRecordingsSeriesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRecordingsSeriesSecurity)
    ], GetRecordingsSeriesRequest.prototype, "security", void 0);
    return GetRecordingsSeriesRequest;
}(SpeakeasyBase));
export { GetRecordingsSeriesRequest };
var GetRecordingsSeriesResponse = /** @class */ (function (_super) {
    __extends(GetRecordingsSeriesResponse, _super);
    function GetRecordingsSeriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetRecordingsSeriesResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRecordingsSeriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRecordingsSeriesResponse.prototype, "statusCode", void 0);
    return GetRecordingsSeriesResponse;
}(SpeakeasyBase));
export { GetRecordingsSeriesResponse };
