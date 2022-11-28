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
// RendererFormattedStrings
/**
 * Message holding the formatted strings used in the renderer.
**/
var RendererFormattedStrings = /** @class */ (function (_super) {
    __extends(RendererFormattedStrings, _super);
    function RendererFormattedStrings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auditGroupExpandTooltip" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "auditGroupExpandTooltip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calculatorLink" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "calculatorLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crcInitialNavigation" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "crcInitialNavigation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crcLongestDurationLabel" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "crcLongestDurationLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dropdownCopyJSON" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "dropdownCopyJson", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dropdownDarkTheme" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "dropdownDarkTheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dropdownPrintExpanded" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "dropdownPrintExpanded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dropdownPrintSummary" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "dropdownPrintSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dropdownSaveGist" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "dropdownSaveGist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dropdownSaveHTML" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "dropdownSaveHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dropdownSaveJSON" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "dropdownSaveJson", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dropdownViewer" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "dropdownViewer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorLabel" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "errorLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMissingAuditInfo" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "errorMissingAuditInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footerIssue" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "footerIssue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labDataTitle" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "labDataTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lsPerformanceCategoryDescription" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "lsPerformanceCategoryDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manualAuditsGroupTitle" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "manualAuditsGroupTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notApplicableAuditsGroupTitle" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "notApplicableAuditsGroupTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opportunityResourceColumnLabel" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "opportunityResourceColumnLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opportunitySavingsColumnLabel" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "opportunitySavingsColumnLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passedAuditsGroupTitle" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "passedAuditsGroupTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeDesktopEmulation" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "runtimeDesktopEmulation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeMobileEmulation" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "runtimeMobileEmulation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeNoEmulation" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "runtimeNoEmulation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeSettingsAxeVersion" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "runtimeSettingsAxeVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeSettingsBenchmark" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "runtimeSettingsBenchmark", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeSettingsCPUThrottling" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "runtimeSettingsCpuThrottling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeSettingsChannel" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "runtimeSettingsChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeSettingsDevice" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "runtimeSettingsDevice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeSettingsFetchTime" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "runtimeSettingsFetchTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeSettingsNetworkThrottling" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "runtimeSettingsNetworkThrottling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeSettingsTitle" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "runtimeSettingsTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeSettingsUA" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "runtimeSettingsUa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeSettingsUANetwork" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "runtimeSettingsUaNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeSettingsUrl" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "runtimeSettingsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeUnknown" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "runtimeUnknown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scorescaleLabel" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "scorescaleLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showRelevantAudits" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "showRelevantAudits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snippetCollapseButtonLabel" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "snippetCollapseButtonLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snippetExpandButtonLabel" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "snippetExpandButtonLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thirdPartyResourcesLabel" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "thirdPartyResourcesLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=throttlingProvided" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "throttlingProvided", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=toplevelWarningsMessage" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "toplevelWarningsMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=varianceDisclaimer" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "varianceDisclaimer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewTreemapLabel" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "viewTreemapLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warningAuditsGroupTitle" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "warningAuditsGroupTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warningHeader" }),
        __metadata("design:type", String)
    ], RendererFormattedStrings.prototype, "warningHeader", void 0);
    return RendererFormattedStrings;
}(SpeakeasyBase));
export { RendererFormattedStrings };
