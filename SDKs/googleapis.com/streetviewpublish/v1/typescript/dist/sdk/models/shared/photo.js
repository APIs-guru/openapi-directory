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
import { Connection } from "./connection";
import { PhotoId } from "./photoid";
import { PlaceInput } from "./place";
import { Pose } from "./pose";
import { UploadRef } from "./uploadref";
import { Place } from "./place";
export var PhotoMapsPublishStatusEnum;
(function (PhotoMapsPublishStatusEnum) {
    PhotoMapsPublishStatusEnum["UnspecifiedMapsPublishStatus"] = "UNSPECIFIED_MAPS_PUBLISH_STATUS";
    PhotoMapsPublishStatusEnum["Published"] = "PUBLISHED";
    PhotoMapsPublishStatusEnum["RejectedUnknown"] = "REJECTED_UNKNOWN";
})(PhotoMapsPublishStatusEnum || (PhotoMapsPublishStatusEnum = {}));
export var PhotoTransferStatusEnum;
(function (PhotoTransferStatusEnum) {
    PhotoTransferStatusEnum["TransferStatusUnknown"] = "TRANSFER_STATUS_UNKNOWN";
    PhotoTransferStatusEnum["NeverTransferred"] = "NEVER_TRANSFERRED";
    PhotoTransferStatusEnum["Pending"] = "PENDING";
    PhotoTransferStatusEnum["Completed"] = "COMPLETED";
    PhotoTransferStatusEnum["Rejected"] = "REJECTED";
    PhotoTransferStatusEnum["Expired"] = "EXPIRED";
    PhotoTransferStatusEnum["Cancelled"] = "CANCELLED";
    PhotoTransferStatusEnum["ReceivedViaTransfer"] = "RECEIVED_VIA_TRANSFER";
})(PhotoTransferStatusEnum || (PhotoTransferStatusEnum = {}));
// PhotoInput
/**
 * Photo is used to store 360 photos along with photo metadata.
**/
var PhotoInput = /** @class */ (function (_super) {
    __extends(PhotoInput, _super);
    function PhotoInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=captureTime" }),
        __metadata("design:type", String)
    ], PhotoInput.prototype, "captureTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections", elemType: Connection }),
        __metadata("design:type", Array)
    ], PhotoInput.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoId" }),
        __metadata("design:type", PhotoId)
    ], PhotoInput.prototype, "photoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=places", elemType: PlaceInput }),
        __metadata("design:type", Array)
    ], PhotoInput.prototype, "places", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pose" }),
        __metadata("design:type", Pose)
    ], PhotoInput.prototype, "pose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uploadReference" }),
        __metadata("design:type", UploadRef)
    ], PhotoInput.prototype, "uploadReference", void 0);
    return PhotoInput;
}(SpeakeasyBase));
export { PhotoInput };
// Photo
/**
 * Photo is used to store 360 photos along with photo metadata.
**/
var Photo = /** @class */ (function (_super) {
    __extends(Photo, _super);
    function Photo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=captureTime" }),
        __metadata("design:type", String)
    ], Photo.prototype, "captureTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections", elemType: Connection }),
        __metadata("design:type", Array)
    ], Photo.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloadUrl" }),
        __metadata("design:type", String)
    ], Photo.prototype, "downloadUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mapsPublishStatus" }),
        __metadata("design:type", String)
    ], Photo.prototype, "mapsPublishStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoId" }),
        __metadata("design:type", PhotoId)
    ], Photo.prototype, "photoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=places", elemType: Place }),
        __metadata("design:type", Array)
    ], Photo.prototype, "places", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pose" }),
        __metadata("design:type", Pose)
    ], Photo.prototype, "pose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shareLink" }),
        __metadata("design:type", String)
    ], Photo.prototype, "shareLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailUrl" }),
        __metadata("design:type", String)
    ], Photo.prototype, "thumbnailUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferStatus" }),
        __metadata("design:type", String)
    ], Photo.prototype, "transferStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uploadReference" }),
        __metadata("design:type", UploadRef)
    ], Photo.prototype, "uploadReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uploadTime" }),
        __metadata("design:type", String)
    ], Photo.prototype, "uploadTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewCount" }),
        __metadata("design:type", String)
    ], Photo.prototype, "viewCount", void 0);
    return Photo;
}(SpeakeasyBase));
export { Photo };
