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
import { CodecProfile } from "./codecprofile";
import { ContainerProfile } from "./containerprofile";
import { DirectPlayProfile } from "./directplayprofile";
import { DeviceIdentification } from "./deviceidentification";
import { ResponseProfile } from "./responseprofile";
import { SubtitleProfile } from "./subtitleprofile";
import { TranscodingProfile } from "./transcodingprofile";
import { XmlAttribute } from "./xmlattribute";
// DeviceProfile
/**
 * Defines the MediaBrowser.Model.Dlna.DeviceProfile.
**/
var DeviceProfile = /** @class */ (function (_super) {
    __extends(DeviceProfile, _super);
    function DeviceProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumArtPn" }),
        __metadata("design:type", String)
    ], DeviceProfile.prototype, "albumArtPn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodecProfiles", elemType: CodecProfile }),
        __metadata("design:type", Array)
    ], DeviceProfile.prototype, "codecProfiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContainerProfiles", elemType: ContainerProfile }),
        __metadata("design:type", Array)
    ], DeviceProfile.prototype, "containerProfiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectPlayProfiles", elemType: DirectPlayProfile }),
        __metadata("design:type", Array)
    ], DeviceProfile.prototype, "directPlayProfiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableAlbumArtInDidl" }),
        __metadata("design:type", Boolean)
    ], DeviceProfile.prototype, "enableAlbumArtInDidl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableMSMediaReceiverRegistrar" }),
        __metadata("design:type", Boolean)
    ], DeviceProfile.prototype, "enableMsMediaReceiverRegistrar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableSingleAlbumArtLimit" }),
        __metadata("design:type", Boolean)
    ], DeviceProfile.prototype, "enableSingleAlbumArtLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableSingleSubtitleLimit" }),
        __metadata("design:type", Boolean)
    ], DeviceProfile.prototype, "enableSingleSubtitleLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FriendlyName" }),
        __metadata("design:type", String)
    ], DeviceProfile.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], DeviceProfile.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", DeviceIdentification)
    ], DeviceProfile.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IgnoreTranscodeByteRangeRequests" }),
        __metadata("design:type", Boolean)
    ], DeviceProfile.prototype, "ignoreTranscodeByteRangeRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Manufacturer" }),
        __metadata("design:type", String)
    ], DeviceProfile.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ManufacturerUrl" }),
        __metadata("design:type", String)
    ], DeviceProfile.prototype, "manufacturerUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxAlbumArtHeight" }),
        __metadata("design:type", Number)
    ], DeviceProfile.prototype, "maxAlbumArtHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxAlbumArtWidth" }),
        __metadata("design:type", Number)
    ], DeviceProfile.prototype, "maxAlbumArtWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxIconHeight" }),
        __metadata("design:type", Number)
    ], DeviceProfile.prototype, "maxIconHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxIconWidth" }),
        __metadata("design:type", Number)
    ], DeviceProfile.prototype, "maxIconWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxStaticBitrate" }),
        __metadata("design:type", Number)
    ], DeviceProfile.prototype, "maxStaticBitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxStaticMusicBitrate" }),
        __metadata("design:type", Number)
    ], DeviceProfile.prototype, "maxStaticMusicBitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxStreamingBitrate" }),
        __metadata("design:type", Number)
    ], DeviceProfile.prototype, "maxStreamingBitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelDescription" }),
        __metadata("design:type", String)
    ], DeviceProfile.prototype, "modelDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelName" }),
        __metadata("design:type", String)
    ], DeviceProfile.prototype, "modelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelNumber" }),
        __metadata("design:type", String)
    ], DeviceProfile.prototype, "modelNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelUrl" }),
        __metadata("design:type", String)
    ], DeviceProfile.prototype, "modelUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MusicStreamingTranscodingBitrate" }),
        __metadata("design:type", Number)
    ], DeviceProfile.prototype, "musicStreamingTranscodingBitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], DeviceProfile.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProtocolInfo" }),
        __metadata("design:type", String)
    ], DeviceProfile.prototype, "protocolInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequiresPlainFolders" }),
        __metadata("design:type", Boolean)
    ], DeviceProfile.prototype, "requiresPlainFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequiresPlainVideoItems" }),
        __metadata("design:type", Boolean)
    ], DeviceProfile.prototype, "requiresPlainVideoItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResponseProfiles", elemType: ResponseProfile }),
        __metadata("design:type", Array)
    ], DeviceProfile.prototype, "responseProfiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SerialNumber" }),
        __metadata("design:type", String)
    ], DeviceProfile.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SonyAggregationFlags" }),
        __metadata("design:type", String)
    ], DeviceProfile.prototype, "sonyAggregationFlags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubtitleProfiles", elemType: SubtitleProfile }),
        __metadata("design:type", Array)
    ], DeviceProfile.prototype, "subtitleProfiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportedMediaTypes" }),
        __metadata("design:type", String)
    ], DeviceProfile.prototype, "supportedMediaTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimelineOffsetSeconds" }),
        __metadata("design:type", Number)
    ], DeviceProfile.prototype, "timelineOffsetSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranscodingProfiles", elemType: TranscodingProfile }),
        __metadata("design:type", Array)
    ], DeviceProfile.prototype, "transcodingProfiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserId" }),
        __metadata("design:type", String)
    ], DeviceProfile.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=XmlRootAttributes", elemType: XmlAttribute }),
        __metadata("design:type", Array)
    ], DeviceProfile.prototype, "xmlRootAttributes", void 0);
    return DeviceProfile;
}(SpeakeasyBase));
export { DeviceProfile };
