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
import { KeepUntilEnum } from "./keepuntilenum";
import { BaseItemDto } from "./baseitemdto";
import { RecordingStatusEnum } from "./recordingstatusenum";
import { BaseItemDtoInput } from "./baseitemdto";
var TimerInfoDto = /** @class */ (function (_super) {
    __extends(TimerInfoDto, _super);
    function TimerInfoDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelId" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelName" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "channelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelPrimaryImageTag" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "channelPrimaryImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate" }),
        __metadata("design:type", Date)
    ], TimerInfoDto.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalChannelId" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "externalChannelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalId" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalProgramId" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "externalProgramId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalSeriesTimerId" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "externalSeriesTimerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPostPaddingRequired" }),
        __metadata("design:type", Boolean)
    ], TimerInfoDto.prototype, "isPostPaddingRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPrePaddingRequired" }),
        __metadata("design:type", Boolean)
    ], TimerInfoDto.prototype, "isPrePaddingRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeepUntil" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "keepUntil", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Overview" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "overview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentBackdropImageTags" }),
        __metadata("design:type", Array)
    ], TimerInfoDto.prototype, "parentBackdropImageTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentBackdropItemId" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "parentBackdropItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostPaddingSeconds" }),
        __metadata("design:type", Number)
    ], TimerInfoDto.prototype, "postPaddingSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrePaddingSeconds" }),
        __metadata("design:type", Number)
    ], TimerInfoDto.prototype, "prePaddingSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], TimerInfoDto.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProgramId" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "programId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProgramInfo" }),
        __metadata("design:type", BaseItemDto)
    ], TimerInfoDto.prototype, "programInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RunTimeTicks" }),
        __metadata("design:type", Number)
    ], TimerInfoDto.prototype, "runTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesTimerId" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "seriesTimerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerId" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "serverId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceName" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "serviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", Date)
    ], TimerInfoDto.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], TimerInfoDto.prototype, "type", void 0);
    return TimerInfoDto;
}(SpeakeasyBase));
export { TimerInfoDto };
var TimerInfoDtoInput = /** @class */ (function (_super) {
    __extends(TimerInfoDtoInput, _super);
    function TimerInfoDtoInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelId" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelName" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "channelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelPrimaryImageTag" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "channelPrimaryImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate" }),
        __metadata("design:type", Date)
    ], TimerInfoDtoInput.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalChannelId" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "externalChannelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalId" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalProgramId" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "externalProgramId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalSeriesTimerId" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "externalSeriesTimerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPostPaddingRequired" }),
        __metadata("design:type", Boolean)
    ], TimerInfoDtoInput.prototype, "isPostPaddingRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPrePaddingRequired" }),
        __metadata("design:type", Boolean)
    ], TimerInfoDtoInput.prototype, "isPrePaddingRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeepUntil" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "keepUntil", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Overview" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "overview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentBackdropImageTags" }),
        __metadata("design:type", Array)
    ], TimerInfoDtoInput.prototype, "parentBackdropImageTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentBackdropItemId" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "parentBackdropItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostPaddingSeconds" }),
        __metadata("design:type", Number)
    ], TimerInfoDtoInput.prototype, "postPaddingSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrePaddingSeconds" }),
        __metadata("design:type", Number)
    ], TimerInfoDtoInput.prototype, "prePaddingSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], TimerInfoDtoInput.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProgramId" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "programId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProgramInfo" }),
        __metadata("design:type", BaseItemDtoInput)
    ], TimerInfoDtoInput.prototype, "programInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RunTimeTicks" }),
        __metadata("design:type", Number)
    ], TimerInfoDtoInput.prototype, "runTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesTimerId" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "seriesTimerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerId" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "serverId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceName" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "serviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", Date)
    ], TimerInfoDtoInput.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], TimerInfoDtoInput.prototype, "type", void 0);
    return TimerInfoDtoInput;
}(SpeakeasyBase));
export { TimerInfoDtoInput };
