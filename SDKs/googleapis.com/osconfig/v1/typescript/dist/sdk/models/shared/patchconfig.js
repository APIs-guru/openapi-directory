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
import { AptSettings } from "./aptsettings";
import { ExecStep } from "./execstep";
import { WindowsUpdateSettings } from "./windowsupdatesettings";
import { YumSettings } from "./yumsettings";
import { ZypperSettings } from "./zyppersettings";
export var PatchConfigRebootConfigEnum;
(function (PatchConfigRebootConfigEnum) {
    PatchConfigRebootConfigEnum["RebootConfigUnspecified"] = "REBOOT_CONFIG_UNSPECIFIED";
    PatchConfigRebootConfigEnum["Default"] = "DEFAULT";
    PatchConfigRebootConfigEnum["Always"] = "ALWAYS";
    PatchConfigRebootConfigEnum["Never"] = "NEVER";
})(PatchConfigRebootConfigEnum || (PatchConfigRebootConfigEnum = {}));
// PatchConfig
/**
 * Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.
**/
var PatchConfig = /** @class */ (function (_super) {
    __extends(PatchConfig, _super);
    function PatchConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apt" }),
        __metadata("design:type", AptSettings)
    ], PatchConfig.prototype, "apt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=goo" }),
        __metadata("design:type", Map)
    ], PatchConfig.prototype, "goo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=migInstancesAllowed" }),
        __metadata("design:type", Boolean)
    ], PatchConfig.prototype, "migInstancesAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postStep" }),
        __metadata("design:type", ExecStep)
    ], PatchConfig.prototype, "postStep", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preStep" }),
        __metadata("design:type", ExecStep)
    ], PatchConfig.prototype, "preStep", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rebootConfig" }),
        __metadata("design:type", String)
    ], PatchConfig.prototype, "rebootConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=windowsUpdate" }),
        __metadata("design:type", WindowsUpdateSettings)
    ], PatchConfig.prototype, "windowsUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yum" }),
        __metadata("design:type", YumSettings)
    ], PatchConfig.prototype, "yum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zypper" }),
        __metadata("design:type", ZypperSettings)
    ], PatchConfig.prototype, "zypper", void 0);
    return PatchConfig;
}(SpeakeasyBase));
export { PatchConfig };
