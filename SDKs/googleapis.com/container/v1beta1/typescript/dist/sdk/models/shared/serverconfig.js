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
import { ReleaseChannelConfig } from "./releasechannelconfig";
import { WindowsVersions } from "./windowsversions";
// ServerConfig
/**
 * Kubernetes Engine service configuration.
**/
var ServerConfig = /** @class */ (function (_super) {
    __extends(ServerConfig, _super);
    function ServerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channels", elemType: ReleaseChannelConfig }),
        __metadata("design:type", Array)
    ], ServerConfig.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultClusterVersion" }),
        __metadata("design:type", String)
    ], ServerConfig.prototype, "defaultClusterVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultImageType" }),
        __metadata("design:type", String)
    ], ServerConfig.prototype, "defaultImageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validImageTypes" }),
        __metadata("design:type", Array)
    ], ServerConfig.prototype, "validImageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validMasterVersions" }),
        __metadata("design:type", Array)
    ], ServerConfig.prototype, "validMasterVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validNodeVersions" }),
        __metadata("design:type", Array)
    ], ServerConfig.prototype, "validNodeVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=windowsVersionMaps", elemType: WindowsVersions }),
        __metadata("design:type", Map)
    ], ServerConfig.prototype, "windowsVersionMaps", void 0);
    return ServerConfig;
}(SpeakeasyBase));
export { ServerConfig };
