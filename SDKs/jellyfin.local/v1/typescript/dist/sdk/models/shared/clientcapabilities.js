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
import { DeviceProfile } from "./deviceprofile";
var ClientCapabilities = /** @class */ (function (_super) {
    __extends(ClientCapabilities, _super);
    function ClientCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AppStoreUrl" }),
        __metadata("design:type", String)
    ], ClientCapabilities.prototype, "appStoreUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceProfile" }),
        __metadata("design:type", DeviceProfile)
    ], ClientCapabilities.prototype, "deviceProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IconUrl" }),
        __metadata("design:type", String)
    ], ClientCapabilities.prototype, "iconUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MessageCallbackUrl" }),
        __metadata("design:type", String)
    ], ClientCapabilities.prototype, "messageCallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlayableMediaTypes" }),
        __metadata("design:type", Array)
    ], ClientCapabilities.prototype, "playableMediaTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportedCommands" }),
        __metadata("design:type", Array)
    ], ClientCapabilities.prototype, "supportedCommands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsContentUploading" }),
        __metadata("design:type", Boolean)
    ], ClientCapabilities.prototype, "supportsContentUploading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsMediaControl" }),
        __metadata("design:type", Boolean)
    ], ClientCapabilities.prototype, "supportsMediaControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsPersistentIdentifier" }),
        __metadata("design:type", Boolean)
    ], ClientCapabilities.prototype, "supportsPersistentIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsSync" }),
        __metadata("design:type", Boolean)
    ], ClientCapabilities.prototype, "supportsSync", void 0);
    return ClientCapabilities;
}(SpeakeasyBase));
export { ClientCapabilities };
