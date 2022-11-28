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
var GetUpcomingEpisodesQueryParams = /** @class */ (function (_super) {
    __extends(GetUpcomingEpisodesQueryParams, _super);
    function GetUpcomingEpisodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" }),
        __metadata("design:type", Array)
    ], GetUpcomingEpisodesQueryParams.prototype, "enableImageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImges" }),
        __metadata("design:type", Boolean)
    ], GetUpcomingEpisodesQueryParams.prototype, "enableImges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" }),
        __metadata("design:type", Boolean)
    ], GetUpcomingEpisodesQueryParams.prototype, "enableUserData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetUpcomingEpisodesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" }),
        __metadata("design:type", Number)
    ], GetUpcomingEpisodesQueryParams.prototype, "imageTypeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetUpcomingEpisodesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentId" }),
        __metadata("design:type", String)
    ], GetUpcomingEpisodesQueryParams.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetUpcomingEpisodesQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetUpcomingEpisodesQueryParams.prototype, "userId", void 0);
    return GetUpcomingEpisodesQueryParams;
}(SpeakeasyBase));
export { GetUpcomingEpisodesQueryParams };
var GetUpcomingEpisodesSecurity = /** @class */ (function (_super) {
    __extends(GetUpcomingEpisodesSecurity, _super);
    function GetUpcomingEpisodesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetUpcomingEpisodesSecurity.prototype, "customAuthentication", void 0);
    return GetUpcomingEpisodesSecurity;
}(SpeakeasyBase));
export { GetUpcomingEpisodesSecurity };
var GetUpcomingEpisodesRequest = /** @class */ (function (_super) {
    __extends(GetUpcomingEpisodesRequest, _super);
    function GetUpcomingEpisodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpcomingEpisodesQueryParams)
    ], GetUpcomingEpisodesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpcomingEpisodesSecurity)
    ], GetUpcomingEpisodesRequest.prototype, "security", void 0);
    return GetUpcomingEpisodesRequest;
}(SpeakeasyBase));
export { GetUpcomingEpisodesRequest };
var GetUpcomingEpisodesResponse = /** @class */ (function (_super) {
    __extends(GetUpcomingEpisodesResponse, _super);
    function GetUpcomingEpisodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetUpcomingEpisodesResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUpcomingEpisodesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUpcomingEpisodesResponse.prototype, "statusCode", void 0);
    return GetUpcomingEpisodesResponse;
}(SpeakeasyBase));
export { GetUpcomingEpisodesResponse };
