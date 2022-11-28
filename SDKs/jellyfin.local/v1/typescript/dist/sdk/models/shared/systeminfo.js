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
import { InstallationInfo } from "./installationinfo";
import { FFmpegLocationEnum } from "./ffmpeglocationenum";
import { ArchitectureEnum } from "./architectureenum";
// SystemInfo
/**
 * Class SystemInfo.
**/
var SystemInfo = /** @class */ (function (_super) {
    __extends(SystemInfo, _super);
    function SystemInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CachePath" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "cachePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CanLaunchWebBrowser" }),
        __metadata("design:type", Boolean)
    ], SystemInfo.prototype, "canLaunchWebBrowser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CanSelfRestart" }),
        __metadata("design:type", Boolean)
    ], SystemInfo.prototype, "canSelfRestart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletedInstallations", elemType: InstallationInfo }),
        __metadata("design:type", Array)
    ], SystemInfo.prototype, "completedInstallations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncoderLocation" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "encoderLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasPendingRestart" }),
        __metadata("design:type", Boolean)
    ], SystemInfo.prototype, "hasPendingRestart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasUpdateAvailable" }),
        __metadata("design:type", Boolean)
    ], SystemInfo.prototype, "hasUpdateAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InternalMetadataPath" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "internalMetadataPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsShuttingDown" }),
        __metadata("design:type", Boolean)
    ], SystemInfo.prototype, "isShuttingDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ItemsByNamePath" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "itemsByNamePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalAddress" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "localAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogPath" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "logPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OperatingSystem" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "operatingSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OperatingSystemDisplayName" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "operatingSystemDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PackageName" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductName" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "productName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProgramDataPath" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "programDataPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "serverName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartupWizardCompleted" }),
        __metadata("design:type", Boolean)
    ], SystemInfo.prototype, "startupWizardCompleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsLibraryMonitor" }),
        __metadata("design:type", Boolean)
    ], SystemInfo.prototype, "supportsLibraryMonitor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SystemArchitecture" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "systemArchitecture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranscodingTempPath" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "transcodingTempPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebPath" }),
        __metadata("design:type", String)
    ], SystemInfo.prototype, "webPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebSocketPortNumber" }),
        __metadata("design:type", Number)
    ], SystemInfo.prototype, "webSocketPortNumber", void 0);
    return SystemInfo;
}(SpeakeasyBase));
export { SystemInfo };
