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
import { GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings } from "./googleclouddialogflowcxv3securitysettingsaudioexportsettings";
import { GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings } from "./googleclouddialogflowcxv3securitysettingsinsightsexportsettings";
export var GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnum;
(function (GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnum) {
    GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnum["PurgeDataTypeUnspecified"] = "PURGE_DATA_TYPE_UNSPECIFIED";
    GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnum["DialogflowHistory"] = "DIALOGFLOW_HISTORY";
})(GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnum || (GoogleCloudDialogflowCxV3SecuritySettingsPurgeDataTypesEnum = {}));
export var GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnum;
(function (GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnum) {
    GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnum["RedactionScopeUnspecified"] = "REDACTION_SCOPE_UNSPECIFIED";
    GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnum["RedactDiskStorage"] = "REDACT_DISK_STORAGE";
})(GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnum || (GoogleCloudDialogflowCxV3SecuritySettingsRedactionScopeEnum = {}));
export var GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnum;
(function (GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnum) {
    GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnum["RedactionStrategyUnspecified"] = "REDACTION_STRATEGY_UNSPECIFIED";
    GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnum["RedactWithService"] = "REDACT_WITH_SERVICE";
})(GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnum || (GoogleCloudDialogflowCxV3SecuritySettingsRedactionStrategyEnum = {}));
// GoogleCloudDialogflowCxV3SecuritySettings
/**
 * Represents the settings related to security issues, such as data redaction and data retention. It may take hours for updates on the settings to propagate to all the related components and take effect.
**/
var GoogleCloudDialogflowCxV3SecuritySettings = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3SecuritySettings, _super);
    function GoogleCloudDialogflowCxV3SecuritySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioExportSettings" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings)
    ], GoogleCloudDialogflowCxV3SecuritySettings.prototype, "audioExportSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deidentifyTemplate" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3SecuritySettings.prototype, "deidentifyTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3SecuritySettings.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insightsExportSettings" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3SecuritySettingsInsightsExportSettings)
    ], GoogleCloudDialogflowCxV3SecuritySettings.prototype, "insightsExportSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inspectTemplate" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3SecuritySettings.prototype, "inspectTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3SecuritySettings.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purgeDataTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3SecuritySettings.prototype, "purgeDataTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redactionScope" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3SecuritySettings.prototype, "redactionScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redactionStrategy" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3SecuritySettings.prototype, "redactionStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retentionWindowDays" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowCxV3SecuritySettings.prototype, "retentionWindowDays", void 0);
    return GoogleCloudDialogflowCxV3SecuritySettings;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3SecuritySettings };
