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
var CreateOrganizationBrandingPolicyPathParams = /** @class */ (function (_super) {
    __extends(CreateOrganizationBrandingPolicyPathParams, _super);
    function CreateOrganizationBrandingPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyPathParams.prototype, "organizationId", void 0);
    return CreateOrganizationBrandingPolicyPathParams;
}(SpeakeasyBase));
export { CreateOrganizationBrandingPolicyPathParams };
export var CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum;
(function (CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum) {
    CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum["AllOrganizationAdmins"] = "All organization admins";
    CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum["AllEnterpriseAdmins"] = "All enterprise admins";
    CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum["AllNetworkAdmins"] = "All network admins";
    CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum["AllAdminsOfNetworks"] = "All admins of networks...";
    CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum["AllAdminsOfNetworksTagged"] = "All admins of networks tagged...";
    CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum["SpecificAdmins"] = "Specific admins...";
    CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum["AllAdmins"] = "All admins";
    CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum["AllSamlAdmins"] = "All SAML admins";
})(CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum || (CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = {}));
// CreateOrganizationBrandingPolicyRequestBodyAdminSettings
/**
 * Settings for describing which kinds of admins this policy applies to.
**/
var CreateOrganizationBrandingPolicyRequestBodyAdminSettings = /** @class */ (function (_super) {
    __extends(CreateOrganizationBrandingPolicyRequestBodyAdminSettings, _super);
    function CreateOrganizationBrandingPolicyRequestBodyAdminSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliesTo" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyRequestBodyAdminSettings.prototype, "appliesTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], CreateOrganizationBrandingPolicyRequestBodyAdminSettings.prototype, "values", void 0);
    return CreateOrganizationBrandingPolicyRequestBodyAdminSettings;
}(SpeakeasyBase));
export { CreateOrganizationBrandingPolicyRequestBodyAdminSettings };
export var CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum;
(function (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum) {
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum["DefaultOrInherit"] = "default or inherit";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum["Hide"] = "hide";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum["Show"] = "show";
})(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum || (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum = {}));
export var CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum;
(function (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum) {
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum["DefaultOrInherit"] = "default or inherit";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum["Hide"] = "hide";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum["Show"] = "show";
})(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum || (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum = {}));
export var CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum;
(function (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum) {
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum["DefaultOrInherit"] = "default or inherit";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum["Hide"] = "hide";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum["Show"] = "show";
})(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum || (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum = {}));
export var CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum;
(function (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum) {
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum["DefaultOrInherit"] = "default or inherit";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum["Hide"] = "hide";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum["Show"] = "show";
})(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum || (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum = {}));
export var CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum;
(function (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum) {
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum["DefaultOrInherit"] = "default or inherit";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum["Hide"] = "hide";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum["Show"] = "show";
})(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum || (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum = {}));
export var CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum;
(function (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum) {
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum["DefaultOrInherit"] = "default or inherit";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum["Hide"] = "hide";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum["Show"] = "show";
})(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum || (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum = {}));
export var CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum;
(function (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum) {
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum["DefaultOrInherit"] = "default or inherit";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum["Hide"] = "hide";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum["Show"] = "show";
})(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum || (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum = {}));
export var CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum;
(function (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum) {
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum["DefaultOrInherit"] = "default or inherit";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum["Hide"] = "hide";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum["Show"] = "show";
})(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum || (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum = {}));
export var CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum;
(function (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum) {
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum["DefaultOrInherit"] = "default or inherit";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum["Hide"] = "hide";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum["Show"] = "show";
})(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum || (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum = {}));
export var CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum;
(function (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum) {
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum["DefaultOrInherit"] = "default or inherit";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum["Hide"] = "hide";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum["Show"] = "show";
})(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum || (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum = {}));
export var CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum;
(function (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum) {
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum["DefaultOrInherit"] = "default or inherit";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum["Hide"] = "hide";
    CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum["Show"] = "show";
})(CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum || (CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum = {}));
// CreateOrganizationBrandingPolicyRequestBodyHelpSettings
/**
 *     Settings for describing the modifications to various Help page features. Each property in this object accepts one of
 *     'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show
 *     the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on
 *     Dashboard; see the documentation for each property to see the allowed values.
 *  Each property defaults to 'default or inherit' when not provided.
**/
var CreateOrganizationBrandingPolicyRequestBodyHelpSettings = /** @class */ (function (_super) {
    __extends(CreateOrganizationBrandingPolicyRequestBodyHelpSettings, _super);
    function CreateOrganizationBrandingPolicyRequestBodyHelpSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiDocsSubtab" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "apiDocsSubtab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=casesSubtab" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "casesSubtab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ciscoMerakiProductDocumentation" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "ciscoMerakiProductDocumentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=communitySubtab" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "communitySubtab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataProtectionRequestsSubtab" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "dataProtectionRequestsSubtab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firewallInfoSubtab" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "firewallInfoSubtab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=getHelpSubtab" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "getHelpSubtab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=getHelpSubtabKnowledgeBaseSearch" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "getHelpSubtabKnowledgeBaseSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hardwareReplacementsSubtab" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "hardwareReplacementsSubtab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=helpTab" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "helpTab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newFeaturesSubtab" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "newFeaturesSubtab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smForums" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "smForums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportContactInfo" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "supportContactInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=universalSearchKnowledgeBaseSearch" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyRequestBodyHelpSettings.prototype, "universalSearchKnowledgeBaseSearch", void 0);
    return CreateOrganizationBrandingPolicyRequestBodyHelpSettings;
}(SpeakeasyBase));
export { CreateOrganizationBrandingPolicyRequestBodyHelpSettings };
var CreateOrganizationBrandingPolicyRequestBody = /** @class */ (function (_super) {
    __extends(CreateOrganizationBrandingPolicyRequestBody, _super);
    function CreateOrganizationBrandingPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminSettings" }),
        __metadata("design:type", CreateOrganizationBrandingPolicyRequestBodyAdminSettings)
    ], CreateOrganizationBrandingPolicyRequestBody.prototype, "adminSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], CreateOrganizationBrandingPolicyRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=helpSettings" }),
        __metadata("design:type", CreateOrganizationBrandingPolicyRequestBodyHelpSettings)
    ], CreateOrganizationBrandingPolicyRequestBody.prototype, "helpSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyRequestBody.prototype, "name", void 0);
    return CreateOrganizationBrandingPolicyRequestBody;
}(SpeakeasyBase));
export { CreateOrganizationBrandingPolicyRequestBody };
var CreateOrganizationBrandingPolicyRequest = /** @class */ (function (_super) {
    __extends(CreateOrganizationBrandingPolicyRequest, _super);
    function CreateOrganizationBrandingPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateOrganizationBrandingPolicyPathParams)
    ], CreateOrganizationBrandingPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateOrganizationBrandingPolicyRequestBody)
    ], CreateOrganizationBrandingPolicyRequest.prototype, "request", void 0);
    return CreateOrganizationBrandingPolicyRequest;
}(SpeakeasyBase));
export { CreateOrganizationBrandingPolicyRequest };
var CreateOrganizationBrandingPolicyResponse = /** @class */ (function (_super) {
    __extends(CreateOrganizationBrandingPolicyResponse, _super);
    function CreateOrganizationBrandingPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateOrganizationBrandingPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateOrganizationBrandingPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateOrganizationBrandingPolicyResponse.prototype, "createOrganizationBrandingPolicy201ApplicationJsonObject", void 0);
    return CreateOrganizationBrandingPolicyResponse;
}(SpeakeasyBase));
export { CreateOrganizationBrandingPolicyResponse };
