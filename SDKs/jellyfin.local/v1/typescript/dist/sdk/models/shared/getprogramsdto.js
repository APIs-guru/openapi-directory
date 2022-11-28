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
// GetProgramsDto
/**
 * Get programs dto.
**/
var GetProgramsDto = /** @class */ (function (_super) {
    __extends(GetProgramsDto, _super);
    function GetProgramsDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelIds" }),
        __metadata("design:type", Array)
    ], GetProgramsDto.prototype, "channelIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableImageTypes" }),
        __metadata("design:type", Array)
    ], GetProgramsDto.prototype, "enableImageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableImages" }),
        __metadata("design:type", Boolean)
    ], GetProgramsDto.prototype, "enableImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableTotalRecordCount" }),
        __metadata("design:type", Boolean)
    ], GetProgramsDto.prototype, "enableTotalRecordCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableUserData" }),
        __metadata("design:type", Boolean)
    ], GetProgramsDto.prototype, "enableUserData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Fields" }),
        __metadata("design:type", Array)
    ], GetProgramsDto.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GenreIds" }),
        __metadata("design:type", Array)
    ], GetProgramsDto.prototype, "genreIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Genres" }),
        __metadata("design:type", Array)
    ], GetProgramsDto.prototype, "genres", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasAired" }),
        __metadata("design:type", Boolean)
    ], GetProgramsDto.prototype, "hasAired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageTypeLimit" }),
        __metadata("design:type", Number)
    ], GetProgramsDto.prototype, "imageTypeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsAiring" }),
        __metadata("design:type", Boolean)
    ], GetProgramsDto.prototype, "isAiring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsKids" }),
        __metadata("design:type", Boolean)
    ], GetProgramsDto.prototype, "isKids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsMovie" }),
        __metadata("design:type", Boolean)
    ], GetProgramsDto.prototype, "isMovie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsNews" }),
        __metadata("design:type", Boolean)
    ], GetProgramsDto.prototype, "isNews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsSeries" }),
        __metadata("design:type", Boolean)
    ], GetProgramsDto.prototype, "isSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsSports" }),
        __metadata("design:type", Boolean)
    ], GetProgramsDto.prototype, "isSports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LibrarySeriesId" }),
        __metadata("design:type", String)
    ], GetProgramsDto.prototype, "librarySeriesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Limit" }),
        __metadata("design:type", Number)
    ], GetProgramsDto.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxEndDate" }),
        __metadata("design:type", Date)
    ], GetProgramsDto.prototype, "maxEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxStartDate" }),
        __metadata("design:type", Date)
    ], GetProgramsDto.prototype, "maxStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinEndDate" }),
        __metadata("design:type", Date)
    ], GetProgramsDto.prototype, "minEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinStartDate" }),
        __metadata("design:type", Date)
    ], GetProgramsDto.prototype, "minStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesTimerId" }),
        __metadata("design:type", String)
    ], GetProgramsDto.prototype, "seriesTimerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortBy" }),
        __metadata("design:type", String)
    ], GetProgramsDto.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortOrder" }),
        __metadata("design:type", String)
    ], GetProgramsDto.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartIndex" }),
        __metadata("design:type", Number)
    ], GetProgramsDto.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserId" }),
        __metadata("design:type", String)
    ], GetProgramsDto.prototype, "userId", void 0);
    return GetProgramsDto;
}(SpeakeasyBase));
export { GetProgramsDto };
