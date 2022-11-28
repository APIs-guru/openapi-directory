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
var GetItemsByUserIdPathParams = /** @class */ (function (_super) {
    __extends(GetItemsByUserIdPathParams, _super);
    function GetItemsByUserIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GetItemsByUserIdPathParams.prototype, "userId", void 0);
    return GetItemsByUserIdPathParams;
}(SpeakeasyBase));
export { GetItemsByUserIdPathParams };
var GetItemsByUserIdQueryParams = /** @class */ (function (_super) {
    __extends(GetItemsByUserIdQueryParams, _super);
    function GetItemsByUserIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adjacentTo" }),
        __metadata("design:type", String)
    ], GetItemsByUserIdQueryParams.prototype, "adjacentTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=albumArtistIds" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "albumArtistIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=albumIds" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "albumIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=albums" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "albums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistIds" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "artistIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artists" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "artists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=collapseBoxSetItems" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "collapseBoxSetItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributingArtistIds" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "contributingArtistIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "enableImageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "enableImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableTotalRecordCount" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "enableTotalRecordCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "enableUserData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeArtistIds" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "excludeArtistIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeItemIds" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "excludeItemIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeItemTypes" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "excludeItemTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeLocationTypes" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "excludeLocationTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genreIds" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "genreIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genres" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "genres", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasImdbId" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "hasImdbId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasOfficialRating" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "hasOfficialRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasOverview" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "hasOverview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasParentalRating" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "hasParentalRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasSpecialFeature" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "hasSpecialFeature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasSubtitles" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "hasSubtitles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasThemeSong" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "hasThemeSong", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasThemeVideo" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "hasThemeVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasTmdbId" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "hasTmdbId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasTrailer" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "hasTrailer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasTvdbId" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "hasTvdbId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" }),
        __metadata("design:type", Number)
    ], GetItemsByUserIdQueryParams.prototype, "imageTypeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypes" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "imageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeItemTypes" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "includeItemTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is3D" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "is3D", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is4K" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "is4K", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isFavorite" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "isFavorite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isHd" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "isHd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isLocked" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "isLocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMissing" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "isMissing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isPlaceHolder" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "isPlaceHolder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isPlayed" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "isPlayed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isUnaired" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "isUnaired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetItemsByUserIdQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationTypes" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "locationTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxHeight" }),
        __metadata("design:type", Number)
    ], GetItemsByUserIdQueryParams.prototype, "maxHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxOfficialRating" }),
        __metadata("design:type", String)
    ], GetItemsByUserIdQueryParams.prototype, "maxOfficialRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxPremiereDate" }),
        __metadata("design:type", Date)
    ], GetItemsByUserIdQueryParams.prototype, "maxPremiereDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxWidth" }),
        __metadata("design:type", Number)
    ], GetItemsByUserIdQueryParams.prototype, "maxWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaTypes" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "mediaTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minCommunityRating" }),
        __metadata("design:type", Number)
    ], GetItemsByUserIdQueryParams.prototype, "minCommunityRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minCriticRating" }),
        __metadata("design:type", Number)
    ], GetItemsByUserIdQueryParams.prototype, "minCriticRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minDateLastSaved" }),
        __metadata("design:type", Date)
    ], GetItemsByUserIdQueryParams.prototype, "minDateLastSaved", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minDateLastSavedForUser" }),
        __metadata("design:type", Date)
    ], GetItemsByUserIdQueryParams.prototype, "minDateLastSavedForUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minHeight" }),
        __metadata("design:type", Number)
    ], GetItemsByUserIdQueryParams.prototype, "minHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minOfficialRating" }),
        __metadata("design:type", String)
    ], GetItemsByUserIdQueryParams.prototype, "minOfficialRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minPremiereDate" }),
        __metadata("design:type", Date)
    ], GetItemsByUserIdQueryParams.prototype, "minPremiereDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minWidth" }),
        __metadata("design:type", Number)
    ], GetItemsByUserIdQueryParams.prototype, "minWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameLessThan" }),
        __metadata("design:type", String)
    ], GetItemsByUserIdQueryParams.prototype, "nameLessThan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameStartsWith" }),
        __metadata("design:type", String)
    ], GetItemsByUserIdQueryParams.prototype, "nameStartsWith", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameStartsWithOrGreater" }),
        __metadata("design:type", String)
    ], GetItemsByUserIdQueryParams.prototype, "nameStartsWithOrGreater", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=officialRatings" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "officialRatings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentId" }),
        __metadata("design:type", String)
    ], GetItemsByUserIdQueryParams.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentIndexNumber" }),
        __metadata("design:type", Number)
    ], GetItemsByUserIdQueryParams.prototype, "parentIndexNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=person" }),
        __metadata("design:type", String)
    ], GetItemsByUserIdQueryParams.prototype, "person", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=personIds" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "personIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=personTypes" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "personTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recursive" }),
        __metadata("design:type", Boolean)
    ], GetItemsByUserIdQueryParams.prototype, "recursive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" }),
        __metadata("design:type", String)
    ], GetItemsByUserIdQueryParams.prototype, "searchTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seriesStatus" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "seriesStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetItemsByUserIdQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetItemsByUserIdQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetItemsByUserIdQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=studioIds" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "studioIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=studios" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "studios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoTypes" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "videoTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=years" }),
        __metadata("design:type", Array)
    ], GetItemsByUserIdQueryParams.prototype, "years", void 0);
    return GetItemsByUserIdQueryParams;
}(SpeakeasyBase));
export { GetItemsByUserIdQueryParams };
var GetItemsByUserIdSecurity = /** @class */ (function (_super) {
    __extends(GetItemsByUserIdSecurity, _super);
    function GetItemsByUserIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetItemsByUserIdSecurity.prototype, "customAuthentication", void 0);
    return GetItemsByUserIdSecurity;
}(SpeakeasyBase));
export { GetItemsByUserIdSecurity };
var GetItemsByUserIdRequest = /** @class */ (function (_super) {
    __extends(GetItemsByUserIdRequest, _super);
    function GetItemsByUserIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemsByUserIdPathParams)
    ], GetItemsByUserIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemsByUserIdQueryParams)
    ], GetItemsByUserIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemsByUserIdSecurity)
    ], GetItemsByUserIdRequest.prototype, "security", void 0);
    return GetItemsByUserIdRequest;
}(SpeakeasyBase));
export { GetItemsByUserIdRequest };
var GetItemsByUserIdResponse = /** @class */ (function (_super) {
    __extends(GetItemsByUserIdResponse, _super);
    function GetItemsByUserIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetItemsByUserIdResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetItemsByUserIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetItemsByUserIdResponse.prototype, "statusCode", void 0);
    return GetItemsByUserIdResponse;
}(SpeakeasyBase));
export { GetItemsByUserIdResponse };
