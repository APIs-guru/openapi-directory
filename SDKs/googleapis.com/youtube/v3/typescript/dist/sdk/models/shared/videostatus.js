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
export var VideoStatusFailureReasonEnum;
(function (VideoStatusFailureReasonEnum) {
    VideoStatusFailureReasonEnum["Conversion"] = "conversion";
    VideoStatusFailureReasonEnum["InvalidFile"] = "invalidFile";
    VideoStatusFailureReasonEnum["EmptyFile"] = "emptyFile";
    VideoStatusFailureReasonEnum["TooSmall"] = "tooSmall";
    VideoStatusFailureReasonEnum["Codec"] = "codec";
    VideoStatusFailureReasonEnum["UploadAborted"] = "uploadAborted";
})(VideoStatusFailureReasonEnum || (VideoStatusFailureReasonEnum = {}));
export var VideoStatusLicenseEnum;
(function (VideoStatusLicenseEnum) {
    VideoStatusLicenseEnum["Youtube"] = "youtube";
    VideoStatusLicenseEnum["CreativeCommon"] = "creativeCommon";
})(VideoStatusLicenseEnum || (VideoStatusLicenseEnum = {}));
export var VideoStatusPrivacyStatusEnum;
(function (VideoStatusPrivacyStatusEnum) {
    VideoStatusPrivacyStatusEnum["Public"] = "public";
    VideoStatusPrivacyStatusEnum["Unlisted"] = "unlisted";
    VideoStatusPrivacyStatusEnum["Private"] = "private";
})(VideoStatusPrivacyStatusEnum || (VideoStatusPrivacyStatusEnum = {}));
export var VideoStatusRejectionReasonEnum;
(function (VideoStatusRejectionReasonEnum) {
    VideoStatusRejectionReasonEnum["Copyright"] = "copyright";
    VideoStatusRejectionReasonEnum["Inappropriate"] = "inappropriate";
    VideoStatusRejectionReasonEnum["Duplicate"] = "duplicate";
    VideoStatusRejectionReasonEnum["TermsOfUse"] = "termsOfUse";
    VideoStatusRejectionReasonEnum["UploaderAccountSuspended"] = "uploaderAccountSuspended";
    VideoStatusRejectionReasonEnum["Length"] = "length";
    VideoStatusRejectionReasonEnum["Claim"] = "claim";
    VideoStatusRejectionReasonEnum["UploaderAccountClosed"] = "uploaderAccountClosed";
    VideoStatusRejectionReasonEnum["Trademark"] = "trademark";
    VideoStatusRejectionReasonEnum["Legal"] = "legal";
})(VideoStatusRejectionReasonEnum || (VideoStatusRejectionReasonEnum = {}));
export var VideoStatusUploadStatusEnum;
(function (VideoStatusUploadStatusEnum) {
    VideoStatusUploadStatusEnum["Uploaded"] = "uploaded";
    VideoStatusUploadStatusEnum["Processed"] = "processed";
    VideoStatusUploadStatusEnum["Failed"] = "failed";
    VideoStatusUploadStatusEnum["Rejected"] = "rejected";
    VideoStatusUploadStatusEnum["Deleted"] = "deleted";
})(VideoStatusUploadStatusEnum || (VideoStatusUploadStatusEnum = {}));
// VideoStatus
/**
 * Basic details about a video category, such as its localized title. Next Id: 18
**/
var VideoStatus = /** @class */ (function (_super) {
    __extends(VideoStatus, _super);
    function VideoStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embeddable" }),
        __metadata("design:type", Boolean)
    ], VideoStatus.prototype, "embeddable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureReason" }),
        __metadata("design:type", String)
    ], VideoStatus.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", String)
    ], VideoStatus.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=madeForKids" }),
        __metadata("design:type", Boolean)
    ], VideoStatus.prototype, "madeForKids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacyStatus" }),
        __metadata("design:type", String)
    ], VideoStatus.prototype, "privacyStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicStatsViewable" }),
        __metadata("design:type", Boolean)
    ], VideoStatus.prototype, "publicStatsViewable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishAt" }),
        __metadata("design:type", Date)
    ], VideoStatus.prototype, "publishAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rejectionReason" }),
        __metadata("design:type", String)
    ], VideoStatus.prototype, "rejectionReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfDeclaredMadeForKids" }),
        __metadata("design:type", Boolean)
    ], VideoStatus.prototype, "selfDeclaredMadeForKids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uploadStatus" }),
        __metadata("design:type", String)
    ], VideoStatus.prototype, "uploadStatus", void 0);
    return VideoStatus;
}(SpeakeasyBase));
export { VideoStatus };
