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
import { PolicyControllerMonitoringConfig } from "./policycontrollermonitoringconfig";
import { PolicyControllerTemplateLibraryConfig } from "./policycontrollertemplatelibraryconfig";
export var PolicyControllerHubConfigInstallSpecEnum;
(function (PolicyControllerHubConfigInstallSpecEnum) {
    PolicyControllerHubConfigInstallSpecEnum["InstallSpecUnspecified"] = "INSTALL_SPEC_UNSPECIFIED";
    PolicyControllerHubConfigInstallSpecEnum["InstallSpecNotInstalled"] = "INSTALL_SPEC_NOT_INSTALLED";
    PolicyControllerHubConfigInstallSpecEnum["InstallSpecEnabled"] = "INSTALL_SPEC_ENABLED";
    PolicyControllerHubConfigInstallSpecEnum["InstallSpecSuspended"] = "INSTALL_SPEC_SUSPENDED";
})(PolicyControllerHubConfigInstallSpecEnum || (PolicyControllerHubConfigInstallSpecEnum = {}));
// PolicyControllerHubConfig
/**
 * Configuration for Policy Controller
**/
var PolicyControllerHubConfig = /** @class */ (function (_super) {
    __extends(PolicyControllerHubConfig, _super);
    function PolicyControllerHubConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auditIntervalSeconds" }),
        __metadata("design:type", String)
    ], PolicyControllerHubConfig.prototype, "auditIntervalSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemptableNamespaces" }),
        __metadata("design:type", Array)
    ], PolicyControllerHubConfig.prototype, "exemptableNamespaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installSpec" }),
        __metadata("design:type", String)
    ], PolicyControllerHubConfig.prototype, "installSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logDeniesEnabled" }),
        __metadata("design:type", Boolean)
    ], PolicyControllerHubConfig.prototype, "logDeniesEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoring" }),
        __metadata("design:type", PolicyControllerMonitoringConfig)
    ], PolicyControllerHubConfig.prototype, "monitoring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mutationEnabled" }),
        __metadata("design:type", Boolean)
    ], PolicyControllerHubConfig.prototype, "mutationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referentialRulesEnabled" }),
        __metadata("design:type", Boolean)
    ], PolicyControllerHubConfig.prototype, "referentialRulesEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateLibraryConfig" }),
        __metadata("design:type", PolicyControllerTemplateLibraryConfig)
    ], PolicyControllerHubConfig.prototype, "templateLibraryConfig", void 0);
    return PolicyControllerHubConfig;
}(SpeakeasyBase));
export { PolicyControllerHubConfig };
