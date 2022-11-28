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
import { DayPatternEnum } from "./daypatternenum";
import { KeepUntilEnum } from "./keepuntilenum";
// SeriesTimerInfoDto
/**
 * Class SeriesTimerInfoDto.
**/
var SeriesTimerInfoDto = /** @class */ (function (_super) {
    __extends(SeriesTimerInfoDto, _super);
    function SeriesTimerInfoDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelId" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelName" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "channelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelPrimaryImageTag" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "channelPrimaryImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DayPattern" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "dayPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Days" }),
        __metadata("design:type", Array)
    ], SeriesTimerInfoDto.prototype, "days", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate" }),
        __metadata("design:type", Date)
    ], SeriesTimerInfoDto.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalChannelId" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "externalChannelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalId" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalProgramId" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "externalProgramId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageTags" }),
        __metadata("design:type", Map)
    ], SeriesTimerInfoDto.prototype, "imageTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPostPaddingRequired" }),
        __metadata("design:type", Boolean)
    ], SeriesTimerInfoDto.prototype, "isPostPaddingRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPrePaddingRequired" }),
        __metadata("design:type", Boolean)
    ], SeriesTimerInfoDto.prototype, "isPrePaddingRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeepUntil" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "keepUntil", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeepUpTo" }),
        __metadata("design:type", Number)
    ], SeriesTimerInfoDto.prototype, "keepUpTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Overview" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "overview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentBackdropImageTags" }),
        __metadata("design:type", Array)
    ], SeriesTimerInfoDto.prototype, "parentBackdropImageTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentBackdropItemId" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "parentBackdropItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentPrimaryImageItemId" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "parentPrimaryImageItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentPrimaryImageTag" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "parentPrimaryImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentThumbImageTag" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "parentThumbImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentThumbItemId" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "parentThumbItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostPaddingSeconds" }),
        __metadata("design:type", Number)
    ], SeriesTimerInfoDto.prototype, "postPaddingSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrePaddingSeconds" }),
        __metadata("design:type", Number)
    ], SeriesTimerInfoDto.prototype, "prePaddingSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], SeriesTimerInfoDto.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProgramId" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "programId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecordAnyChannel" }),
        __metadata("design:type", Boolean)
    ], SeriesTimerInfoDto.prototype, "recordAnyChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecordAnyTime" }),
        __metadata("design:type", Boolean)
    ], SeriesTimerInfoDto.prototype, "recordAnyTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecordNewOnly" }),
        __metadata("design:type", Boolean)
    ], SeriesTimerInfoDto.prototype, "recordNewOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerId" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "serverId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceName" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "serviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SkipEpisodesInLibrary" }),
        __metadata("design:type", Boolean)
    ], SeriesTimerInfoDto.prototype, "skipEpisodesInLibrary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", Date)
    ], SeriesTimerInfoDto.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], SeriesTimerInfoDto.prototype, "type", void 0);
    return SeriesTimerInfoDto;
}(SpeakeasyBase));
export { SeriesTimerInfoDto };
