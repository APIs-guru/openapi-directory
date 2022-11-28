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
var UpdateOrganizationBrandingPolicyPathParams = /** @class */ (function (_super) {
    __extends(UpdateOrganizationBrandingPolicyPathParams, _super);
    function UpdateOrganizationBrandingPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=brandingPolicyId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyPathParams.prototype, "brandingPolicyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyPathParams.prototype, "organizationId", void 0);
    return UpdateOrganizationBrandingPolicyPathParams;
}(SpeakeasyBase));
export { UpdateOrganizationBrandingPolicyPathParams };
export var UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum;
(function (UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum) {
    UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum["AllOrganizationAdmins"] = "All organization admins";
    UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum["AllEnterpriseAdmins"] = "All enterprise admins";
    UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum["AllNetworkAdmins"] = "All network admins";
    UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum["AllAdminsOfNetworks"] = "All admins of networks...";
    UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum["AllAdminsOfNetworksTagged"] = "All admins of networks tagged...";
    UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum["SpecificAdmins"] = "Specific admins...";
    UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum["AllAdmins"] = "All admins";
    UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum["AllSamlAdmins"] = "All SAML admins";
})(UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum || (UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = {}));
// UpdateOrganizationBrandingPolicyRequestBodyAdminSettings
/**
 * Settings for describing which kinds of admins this policy applies to.
**/
var UpdateOrganizationBrandingPolicyRequestBodyAdminSettings = /** @class */ (function (_super) {
    __extends(UpdateOrganizationBrandingPolicyRequestBodyAdminSettings, _super);
    function UpdateOrganizationBrandingPolicyRequestBodyAdminSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliesTo" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyRequestBodyAdminSettings.prototype, "appliesTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationBrandingPolicyRequestBodyAdminSettings.prototype, "values", void 0);
    return UpdateOrganizationBrandingPolicyRequestBodyAdminSettings;
}(SpeakeasyBase));
export { UpdateOrganizationBrandingPolicyRequestBodyAdminSettings };
export var UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum;
(function (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum) {
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum["DefaultOrInherit"] = "default or inherit";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum["Hide"] = "hide";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum["Show"] = "show";
})(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum || (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum = {}));
export var UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum;
(function (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum) {
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum["DefaultOrInherit"] = "default or inherit";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum["Hide"] = "hide";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum["Show"] = "show";
})(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum || (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum = {}));
export var UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum;
(function (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum) {
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum["DefaultOrInherit"] = "default or inherit";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum["Hide"] = "hide";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum["Show"] = "show";
})(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum || (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum = {}));
export var UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum;
(function (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum) {
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum["DefaultOrInherit"] = "default or inherit";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum["Hide"] = "hide";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum["Show"] = "show";
})(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum || (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum = {}));
export var UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum;
(function (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum) {
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum["DefaultOrInherit"] = "default or inherit";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum["Hide"] = "hide";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum["Show"] = "show";
})(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum || (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum = {}));
export var UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum;
(function (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum) {
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum["DefaultOrInherit"] = "default or inherit";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum["Hide"] = "hide";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum["Show"] = "show";
})(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum || (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum = {}));
export var UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum;
(function (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum) {
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum["DefaultOrInherit"] = "default or inherit";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum["Hide"] = "hide";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum["Show"] = "show";
})(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum || (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum = {}));
export var UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum;
(function (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum) {
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum["DefaultOrInherit"] = "default or inherit";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum["Hide"] = "hide";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum["Show"] = "show";
})(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum || (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum = {}));
export var UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum;
(function (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum) {
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum["DefaultOrInherit"] = "default or inherit";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum["Hide"] = "hide";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum["Show"] = "show";
})(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum || (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum = {}));
export var UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum;
(function (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum) {
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum["DefaultOrInherit"] = "default or inherit";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum["Hide"] = "hide";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum["Show"] = "show";
})(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum || (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum = {}));
export var UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum;
(function (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum) {
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum["DefaultOrInherit"] = "default or inherit";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum["Hide"] = "hide";
    UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum["Show"] = "show";
})(UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum || (UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum = {}));
// UpdateOrganizationBrandingPolicyRequestBodyHelpSettings
/**
 *     Settings for describing the modifications to various Help page features. Each property in this object accepts one of
 *     'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show
 *     the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on
 *     Dashboard; see the documentation for each property to see the allowed values.
 *
**/
var UpdateOrganizationBrandingPolicyRequestBodyHelpSettings = /** @class */ (function (_super) {
    __extends(UpdateOrganizationBrandingPolicyRequestBodyHelpSettings, _super);
    function UpdateOrganizationBrandingPolicyRequestBodyHelpSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiDocsSubtab" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "apiDocsSubtab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=casesSubtab" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "casesSubtab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ciscoMerakiProductDocumentation" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "ciscoMerakiProductDocumentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=communitySubtab" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "communitySubtab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataProtectionRequestsSubtab" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "dataProtectionRequestsSubtab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firewallInfoSubtab" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "firewallInfoSubtab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=getHelpSubtab" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "getHelpSubtab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=getHelpSubtabKnowledgeBaseSearch" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "getHelpSubtabKnowledgeBaseSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hardwareReplacementsSubtab" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "hardwareReplacementsSubtab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=helpTab" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "helpTab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newFeaturesSubtab" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "newFeaturesSubtab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smForums" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "smForums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportContactInfo" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "supportContactInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=universalSearchKnowledgeBaseSearch" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "universalSearchKnowledgeBaseSearch", void 0);
    return UpdateOrganizationBrandingPolicyRequestBodyHelpSettings;
}(SpeakeasyBase));
export { UpdateOrganizationBrandingPolicyRequestBodyHelpSettings };
var UpdateOrganizationBrandingPolicyRequestBody = /** @class */ (function (_super) {
    __extends(UpdateOrganizationBrandingPolicyRequestBody, _super);
    function UpdateOrganizationBrandingPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminSettings" }),
        __metadata("design:type", UpdateOrganizationBrandingPolicyRequestBodyAdminSettings)
    ], UpdateOrganizationBrandingPolicyRequestBody.prototype, "adminSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationBrandingPolicyRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=helpSettings" }),
        __metadata("design:type", UpdateOrganizationBrandingPolicyRequestBodyHelpSettings)
    ], UpdateOrganizationBrandingPolicyRequestBody.prototype, "helpSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyRequestBody.prototype, "name", void 0);
    return UpdateOrganizationBrandingPolicyRequestBody;
}(SpeakeasyBase));
export { UpdateOrganizationBrandingPolicyRequestBody };
var UpdateOrganizationBrandingPolicyRequest = /** @class */ (function (_super) {
    __extends(UpdateOrganizationBrandingPolicyRequest, _super);
    function UpdateOrganizationBrandingPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateOrganizationBrandingPolicyPathParams)
    ], UpdateOrganizationBrandingPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateOrganizationBrandingPolicyRequestBody)
    ], UpdateOrganizationBrandingPolicyRequest.prototype, "request", void 0);
    return UpdateOrganizationBrandingPolicyRequest;
}(SpeakeasyBase));
export { UpdateOrganizationBrandingPolicyRequest };
var UpdateOrganizationBrandingPolicyResponse = /** @class */ (function (_super) {
    __extends(UpdateOrganizationBrandingPolicyResponse, _super);
    function UpdateOrganizationBrandingPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateOrganizationBrandingPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateOrganizationBrandingPolicyResponse.prototype, "updateOrganizationBrandingPolicy200ApplicationJsonObject", void 0);
    return UpdateOrganizationBrandingPolicyResponse;
}(SpeakeasyBase));
export { UpdateOrganizationBrandingPolicyResponse };
