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
var GetTrailersQueryParams = /** @class */ (function (_super) {
    __extends(GetTrailersQueryParams, _super);
    function GetTrailersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adjacentTo" }),
        __metadata("design:type", String)
    ], GetTrailersQueryParams.prototype, "adjacentTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=albumArtistIds" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "albumArtistIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=albumIds" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "albumIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=albums" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "albums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistIds" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "artistIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artists" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "artists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=collapseBoxSetItems" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "collapseBoxSetItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributingArtistIds" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "contributingArtistIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "enableImageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "enableImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableTotalRecordCount" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "enableTotalRecordCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "enableUserData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeArtistIds" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "excludeArtistIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeItemIds" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "excludeItemIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeItemTypes" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "excludeItemTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeLocationTypes" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "excludeLocationTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genreIds" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "genreIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genres" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "genres", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasImdbId" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "hasImdbId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasOfficialRating" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "hasOfficialRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasOverview" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "hasOverview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasParentalRating" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "hasParentalRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasSpecialFeature" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "hasSpecialFeature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasSubtitles" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "hasSubtitles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasThemeSong" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "hasThemeSong", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasThemeVideo" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "hasThemeVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasTmdbId" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "hasTmdbId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasTrailer" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "hasTrailer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasTvdbId" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "hasTvdbId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" }),
        __metadata("design:type", Number)
    ], GetTrailersQueryParams.prototype, "imageTypeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypes" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "imageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is3D" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "is3D", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is4K" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "is4K", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isFavorite" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "isFavorite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isHd" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "isHd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isLocked" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "isLocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMissing" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "isMissing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isPlaceHolder" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "isPlaceHolder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isPlayed" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "isPlayed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isUnaired" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "isUnaired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetTrailersQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationTypes" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "locationTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxHeight" }),
        __metadata("design:type", Number)
    ], GetTrailersQueryParams.prototype, "maxHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxOfficialRating" }),
        __metadata("design:type", String)
    ], GetTrailersQueryParams.prototype, "maxOfficialRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxPremiereDate" }),
        __metadata("design:type", Date)
    ], GetTrailersQueryParams.prototype, "maxPremiereDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxWidth" }),
        __metadata("design:type", Number)
    ], GetTrailersQueryParams.prototype, "maxWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaTypes" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "mediaTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minCommunityRating" }),
        __metadata("design:type", Number)
    ], GetTrailersQueryParams.prototype, "minCommunityRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minCriticRating" }),
        __metadata("design:type", Number)
    ], GetTrailersQueryParams.prototype, "minCriticRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minDateLastSaved" }),
        __metadata("design:type", Date)
    ], GetTrailersQueryParams.prototype, "minDateLastSaved", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minDateLastSavedForUser" }),
        __metadata("design:type", Date)
    ], GetTrailersQueryParams.prototype, "minDateLastSavedForUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minHeight" }),
        __metadata("design:type", Number)
    ], GetTrailersQueryParams.prototype, "minHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minOfficialRating" }),
        __metadata("design:type", String)
    ], GetTrailersQueryParams.prototype, "minOfficialRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minPremiereDate" }),
        __metadata("design:type", Date)
    ], GetTrailersQueryParams.prototype, "minPremiereDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minWidth" }),
        __metadata("design:type", Number)
    ], GetTrailersQueryParams.prototype, "minWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameLessThan" }),
        __metadata("design:type", String)
    ], GetTrailersQueryParams.prototype, "nameLessThan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameStartsWith" }),
        __metadata("design:type", String)
    ], GetTrailersQueryParams.prototype, "nameStartsWith", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameStartsWithOrGreater" }),
        __metadata("design:type", String)
    ], GetTrailersQueryParams.prototype, "nameStartsWithOrGreater", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=officialRatings" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "officialRatings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentId" }),
        __metadata("design:type", String)
    ], GetTrailersQueryParams.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentIndexNumber" }),
        __metadata("design:type", Number)
    ], GetTrailersQueryParams.prototype, "parentIndexNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=person" }),
        __metadata("design:type", String)
    ], GetTrailersQueryParams.prototype, "person", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=personIds" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "personIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=personTypes" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "personTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recursive" }),
        __metadata("design:type", Boolean)
    ], GetTrailersQueryParams.prototype, "recursive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" }),
        __metadata("design:type", String)
    ], GetTrailersQueryParams.prototype, "searchTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seriesStatus" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "seriesStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetTrailersQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetTrailersQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetTrailersQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=studioIds" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "studioIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=studios" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "studios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetTrailersQueryParams.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoTypes" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "videoTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=years" }),
        __metadata("design:type", Array)
    ], GetTrailersQueryParams.prototype, "years", void 0);
    return GetTrailersQueryParams;
}(SpeakeasyBase));
export { GetTrailersQueryParams };
var GetTrailersSecurity = /** @class */ (function (_super) {
    __extends(GetTrailersSecurity, _super);
    function GetTrailersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetTrailersSecurity.prototype, "customAuthentication", void 0);
    return GetTrailersSecurity;
}(SpeakeasyBase));
export { GetTrailersSecurity };
var GetTrailersRequest = /** @class */ (function (_super) {
    __extends(GetTrailersRequest, _super);
    function GetTrailersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrailersQueryParams)
    ], GetTrailersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrailersSecurity)
    ], GetTrailersRequest.prototype, "security", void 0);
    return GetTrailersRequest;
}(SpeakeasyBase));
export { GetTrailersRequest };
var GetTrailersResponse = /** @class */ (function (_super) {
    __extends(GetTrailersResponse, _super);
    function GetTrailersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetTrailersResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTrailersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTrailersResponse.prototype, "statusCode", void 0);
    return GetTrailersResponse;
}(SpeakeasyBase));
export { GetTrailersResponse };
