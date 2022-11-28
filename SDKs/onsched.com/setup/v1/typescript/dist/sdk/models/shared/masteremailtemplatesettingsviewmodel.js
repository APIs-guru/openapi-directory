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
var MasterEmailTemplateSettingsViewModel = /** @class */ (function (_super) {
    __extends(MasterEmailTemplateSettingsViewModel, _super);
    function MasterEmailTemplateSettingsViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=centerEmailContent" }),
        __metadata("design:type", Boolean)
    ], MasterEmailTemplateSettingsViewModel.prototype, "centerEmailContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=centerEmailContentPanel" }),
        __metadata("design:type", Boolean)
    ], MasterEmailTemplateSettingsViewModel.prototype, "centerEmailContentPanel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=centerEmailFooter" }),
        __metadata("design:type", Boolean)
    ], MasterEmailTemplateSettingsViewModel.prototype, "centerEmailFooter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentBackgroundColor" }),
        __metadata("design:type", String)
    ], MasterEmailTemplateSettingsViewModel.prototype, "contentBackgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentColor" }),
        __metadata("design:type", String)
    ], MasterEmailTemplateSettingsViewModel.prototype, "contentColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentLinkColor" }),
        __metadata("design:type", String)
    ], MasterEmailTemplateSettingsViewModel.prototype, "contentLinkColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailBackgroundColor" }),
        __metadata("design:type", String)
    ], MasterEmailTemplateSettingsViewModel.prototype, "emailBackgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailColor" }),
        __metadata("design:type", String)
    ], MasterEmailTemplateSettingsViewModel.prototype, "emailColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailLinkColor" }),
        __metadata("design:type", String)
    ], MasterEmailTemplateSettingsViewModel.prototype, "emailLinkColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footerFontSize" }),
        __metadata("design:type", String)
    ], MasterEmailTemplateSettingsViewModel.prototype, "footerFontSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footerLogoHeight" }),
        __metadata("design:type", String)
    ], MasterEmailTemplateSettingsViewModel.prototype, "footerLogoHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footerLogoPadding" }),
        __metadata("design:type", String)
    ], MasterEmailTemplateSettingsViewModel.prototype, "footerLogoPadding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footerPanelEmailContact" }),
        __metadata("design:type", Boolean)
    ], MasterEmailTemplateSettingsViewModel.prototype, "footerPanelEmailContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footerPanelPhoneContact" }),
        __metadata("design:type", Boolean)
    ], MasterEmailTemplateSettingsViewModel.prototype, "footerPanelPhoneContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footerPanelWebsiteContact" }),
        __metadata("design:type", Boolean)
    ], MasterEmailTemplateSettingsViewModel.prototype, "footerPanelWebsiteContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headerLogoHeight" }),
        __metadata("design:type", String)
    ], MasterEmailTemplateSettingsViewModel.prototype, "headerLogoHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headerLogoPadding" }),
        __metadata("design:type", String)
    ], MasterEmailTemplateSettingsViewModel.prototype, "headerLogoPadding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=panelBackgroundColor" }),
        __metadata("design:type", String)
    ], MasterEmailTemplateSettingsViewModel.prototype, "panelBackgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=panelColor" }),
        __metadata("design:type", String)
    ], MasterEmailTemplateSettingsViewModel.prototype, "panelColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=panelLinkColor" }),
        __metadata("design:type", String)
    ], MasterEmailTemplateSettingsViewModel.prototype, "panelLinkColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacyPolicyLink" }),
        __metadata("design:type", String)
    ], MasterEmailTemplateSettingsViewModel.prototype, "privacyPolicyLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showContentPanel" }),
        __metadata("design:type", Boolean)
    ], MasterEmailTemplateSettingsViewModel.prototype, "showContentPanel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showFooterLogo" }),
        __metadata("design:type", Boolean)
    ], MasterEmailTemplateSettingsViewModel.prototype, "showFooterLogo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showFooterPanel" }),
        __metadata("design:type", Boolean)
    ], MasterEmailTemplateSettingsViewModel.prototype, "showFooterPanel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showHeaderLogo" }),
        __metadata("design:type", Boolean)
    ], MasterEmailTemplateSettingsViewModel.prototype, "showHeaderLogo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showHeaderPanel" }),
        __metadata("design:type", Boolean)
    ], MasterEmailTemplateSettingsViewModel.prototype, "showHeaderPanel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], MasterEmailTemplateSettingsViewModel.prototype, "version", void 0);
    return MasterEmailTemplateSettingsViewModel;
}(SpeakeasyBase));
export { MasterEmailTemplateSettingsViewModel };
