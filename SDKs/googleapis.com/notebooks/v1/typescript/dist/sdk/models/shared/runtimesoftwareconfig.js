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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var RuntimeSoftwareConfigPostStartupScriptBehaviorEnum;
(function (RuntimeSoftwareConfigPostStartupScriptBehaviorEnum) {
    RuntimeSoftwareConfigPostStartupScriptBehaviorEnum["PostStartupScriptBehaviorUnspecified"] = "POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED";
    RuntimeSoftwareConfigPostStartupScriptBehaviorEnum["RunEveryStart"] = "RUN_EVERY_START";
    RuntimeSoftwareConfigPostStartupScriptBehaviorEnum["DownloadAndRunEveryStart"] = "DOWNLOAD_AND_RUN_EVERY_START";
})(RuntimeSoftwareConfigPostStartupScriptBehaviorEnum || (RuntimeSoftwareConfigPostStartupScriptBehaviorEnum = {}));
// RuntimeSoftwareConfig
/**
 * Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`
**/
var RuntimeSoftwareConfig = /** @class */ (function (_super) {
    __extends(RuntimeSoftwareConfig, _super);
    function RuntimeSoftwareConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=customGpuDriverPath" }),
        __metadata("design:type", String)
    ], RuntimeSoftwareConfig.prototype, "customGpuDriverPath", void 0);
    __decorate([
        Metadata({ data: "json, name=disableTerminal" }),
        __metadata("design:type", Boolean)
    ], RuntimeSoftwareConfig.prototype, "disableTerminal", void 0);
    __decorate([
        Metadata({ data: "json, name=enableHealthMonitoring" }),
        __metadata("design:type", Boolean)
    ], RuntimeSoftwareConfig.prototype, "enableHealthMonitoring", void 0);
    __decorate([
        Metadata({ data: "json, name=idleShutdown" }),
        __metadata("design:type", Boolean)
    ], RuntimeSoftwareConfig.prototype, "idleShutdown", void 0);
    __decorate([
        Metadata({ data: "json, name=idleShutdownTimeout" }),
        __metadata("design:type", Number)
    ], RuntimeSoftwareConfig.prototype, "idleShutdownTimeout", void 0);
    __decorate([
        Metadata({ data: "json, name=installGpuDriver" }),
        __metadata("design:type", Boolean)
    ], RuntimeSoftwareConfig.prototype, "installGpuDriver", void 0);
    __decorate([
        Metadata({ data: "json, name=kernels", elemType: shared.ContainerImage }),
        __metadata("design:type", Array)
    ], RuntimeSoftwareConfig.prototype, "kernels", void 0);
    __decorate([
        Metadata({ data: "json, name=notebookUpgradeSchedule" }),
        __metadata("design:type", String)
    ], RuntimeSoftwareConfig.prototype, "notebookUpgradeSchedule", void 0);
    __decorate([
        Metadata({ data: "json, name=postStartupScript" }),
        __metadata("design:type", String)
    ], RuntimeSoftwareConfig.prototype, "postStartupScript", void 0);
    __decorate([
        Metadata({ data: "json, name=postStartupScriptBehavior" }),
        __metadata("design:type", String)
    ], RuntimeSoftwareConfig.prototype, "postStartupScriptBehavior", void 0);
    __decorate([
        Metadata({ data: "json, name=upgradeable" }),
        __metadata("design:type", Boolean)
    ], RuntimeSoftwareConfig.prototype, "upgradeable", void 0);
    return RuntimeSoftwareConfig;
}(SpeakeasyBase));
export { RuntimeSoftwareConfig };
