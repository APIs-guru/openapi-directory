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
var GetAlbumArtistsQueryParams = /** @class */ (function (_super) {
    __extends(GetAlbumArtistsQueryParams, _super);
    function GetAlbumArtistsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" }),
        __metadata("design:type", Array)
    ], GetAlbumArtistsQueryParams.prototype, "enableImageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" }),
        __metadata("design:type", Boolean)
    ], GetAlbumArtistsQueryParams.prototype, "enableImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableTotalRecordCount" }),
        __metadata("design:type", Boolean)
    ], GetAlbumArtistsQueryParams.prototype, "enableTotalRecordCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" }),
        __metadata("design:type", Boolean)
    ], GetAlbumArtistsQueryParams.prototype, "enableUserData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeItemTypes" }),
        __metadata("design:type", Array)
    ], GetAlbumArtistsQueryParams.prototype, "excludeItemTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetAlbumArtistsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", Array)
    ], GetAlbumArtistsQueryParams.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genreIds" }),
        __metadata("design:type", Array)
    ], GetAlbumArtistsQueryParams.prototype, "genreIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genres" }),
        __metadata("design:type", Array)
    ], GetAlbumArtistsQueryParams.prototype, "genres", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" }),
        __metadata("design:type", Number)
    ], GetAlbumArtistsQueryParams.prototype, "imageTypeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeItemTypes" }),
        __metadata("design:type", Array)
    ], GetAlbumArtistsQueryParams.prototype, "includeItemTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isFavorite" }),
        __metadata("design:type", Boolean)
    ], GetAlbumArtistsQueryParams.prototype, "isFavorite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetAlbumArtistsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaTypes" }),
        __metadata("design:type", Array)
    ], GetAlbumArtistsQueryParams.prototype, "mediaTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minCommunityRating" }),
        __metadata("design:type", Number)
    ], GetAlbumArtistsQueryParams.prototype, "minCommunityRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameLessThan" }),
        __metadata("design:type", String)
    ], GetAlbumArtistsQueryParams.prototype, "nameLessThan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameStartsWith" }),
        __metadata("design:type", String)
    ], GetAlbumArtistsQueryParams.prototype, "nameStartsWith", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameStartsWithOrGreater" }),
        __metadata("design:type", String)
    ], GetAlbumArtistsQueryParams.prototype, "nameStartsWithOrGreater", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=officialRatings" }),
        __metadata("design:type", Array)
    ], GetAlbumArtistsQueryParams.prototype, "officialRatings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentId" }),
        __metadata("design:type", String)
    ], GetAlbumArtistsQueryParams.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=person" }),
        __metadata("design:type", String)
    ], GetAlbumArtistsQueryParams.prototype, "person", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=personIds" }),
        __metadata("design:type", Array)
    ], GetAlbumArtistsQueryParams.prototype, "personIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=personTypes" }),
        __metadata("design:type", Array)
    ], GetAlbumArtistsQueryParams.prototype, "personTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" }),
        __metadata("design:type", String)
    ], GetAlbumArtistsQueryParams.prototype, "searchTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetAlbumArtistsQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=studioIds" }),
        __metadata("design:type", Array)
    ], GetAlbumArtistsQueryParams.prototype, "studioIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=studios" }),
        __metadata("design:type", Array)
    ], GetAlbumArtistsQueryParams.prototype, "studios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", Array)
    ], GetAlbumArtistsQueryParams.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetAlbumArtistsQueryParams.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=years" }),
        __metadata("design:type", Array)
    ], GetAlbumArtistsQueryParams.prototype, "years", void 0);
    return GetAlbumArtistsQueryParams;
}(SpeakeasyBase));
export { GetAlbumArtistsQueryParams };
var GetAlbumArtistsSecurity = /** @class */ (function (_super) {
    __extends(GetAlbumArtistsSecurity, _super);
    function GetAlbumArtistsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetAlbumArtistsSecurity.prototype, "customAuthentication", void 0);
    return GetAlbumArtistsSecurity;
}(SpeakeasyBase));
export { GetAlbumArtistsSecurity };
var GetAlbumArtistsRequest = /** @class */ (function (_super) {
    __extends(GetAlbumArtistsRequest, _super);
    function GetAlbumArtistsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAlbumArtistsQueryParams)
    ], GetAlbumArtistsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAlbumArtistsSecurity)
    ], GetAlbumArtistsRequest.prototype, "security", void 0);
    return GetAlbumArtistsRequest;
}(SpeakeasyBase));
export { GetAlbumArtistsRequest };
var GetAlbumArtistsResponse = /** @class */ (function (_super) {
    __extends(GetAlbumArtistsResponse, _super);
    function GetAlbumArtistsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetAlbumArtistsResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAlbumArtistsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAlbumArtistsResponse.prototype, "statusCode", void 0);
    return GetAlbumArtistsResponse;
}(SpeakeasyBase));
export { GetAlbumArtistsResponse };
