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
import { DimensionValue } from "./dimensionvalue";
import { FloodlightActivityDynamicTag } from "./floodlightactivitydynamictag";
import { FloodlightActivityPublisherDynamicTag } from "./floodlightactivitypublisherdynamictag";
export var FloodlightActivityCacheBustingTypeEnum;
(function (FloodlightActivityCacheBustingTypeEnum) {
    FloodlightActivityCacheBustingTypeEnum["Javascript"] = "JAVASCRIPT";
    FloodlightActivityCacheBustingTypeEnum["ActiveServerPage"] = "ACTIVE_SERVER_PAGE";
    FloodlightActivityCacheBustingTypeEnum["Jsp"] = "JSP";
    FloodlightActivityCacheBustingTypeEnum["Php"] = "PHP";
    FloodlightActivityCacheBustingTypeEnum["ColdFusion"] = "COLD_FUSION";
})(FloodlightActivityCacheBustingTypeEnum || (FloodlightActivityCacheBustingTypeEnum = {}));
export var FloodlightActivityCountingMethodEnum;
(function (FloodlightActivityCountingMethodEnum) {
    FloodlightActivityCountingMethodEnum["StandardCounting"] = "STANDARD_COUNTING";
    FloodlightActivityCountingMethodEnum["UniqueCounting"] = "UNIQUE_COUNTING";
    FloodlightActivityCountingMethodEnum["SessionCounting"] = "SESSION_COUNTING";
    FloodlightActivityCountingMethodEnum["TransactionsCounting"] = "TRANSACTIONS_COUNTING";
    FloodlightActivityCountingMethodEnum["ItemsSoldCounting"] = "ITEMS_SOLD_COUNTING";
})(FloodlightActivityCountingMethodEnum || (FloodlightActivityCountingMethodEnum = {}));
export var FloodlightActivityFloodlightActivityGroupTypeEnum;
(function (FloodlightActivityFloodlightActivityGroupTypeEnum) {
    FloodlightActivityFloodlightActivityGroupTypeEnum["Counter"] = "COUNTER";
    FloodlightActivityFloodlightActivityGroupTypeEnum["Sale"] = "SALE";
})(FloodlightActivityFloodlightActivityGroupTypeEnum || (FloodlightActivityFloodlightActivityGroupTypeEnum = {}));
export var FloodlightActivityFloodlightTagTypeEnum;
(function (FloodlightActivityFloodlightTagTypeEnum) {
    FloodlightActivityFloodlightTagTypeEnum["Iframe"] = "IFRAME";
    FloodlightActivityFloodlightTagTypeEnum["Image"] = "IMAGE";
    FloodlightActivityFloodlightTagTypeEnum["GlobalSiteTag"] = "GLOBAL_SITE_TAG";
})(FloodlightActivityFloodlightTagTypeEnum || (FloodlightActivityFloodlightTagTypeEnum = {}));
export var FloodlightActivityStatusEnum;
(function (FloodlightActivityStatusEnum) {
    FloodlightActivityStatusEnum["Active"] = "ACTIVE";
    FloodlightActivityStatusEnum["ArchivedAndDisabled"] = "ARCHIVED_AND_DISABLED";
    FloodlightActivityStatusEnum["Archived"] = "ARCHIVED";
    FloodlightActivityStatusEnum["DisabledPolicy"] = "DISABLED_POLICY";
})(FloodlightActivityStatusEnum || (FloodlightActivityStatusEnum = {}));
export var FloodlightActivityTagFormatEnum;
(function (FloodlightActivityTagFormatEnum) {
    FloodlightActivityTagFormatEnum["Html"] = "HTML";
    FloodlightActivityTagFormatEnum["Xhtml"] = "XHTML";
})(FloodlightActivityTagFormatEnum || (FloodlightActivityTagFormatEnum = {}));
export var FloodlightActivityUserDefinedVariableTypesEnum;
(function (FloodlightActivityUserDefinedVariableTypesEnum) {
    FloodlightActivityUserDefinedVariableTypesEnum["U1"] = "U1";
    FloodlightActivityUserDefinedVariableTypesEnum["U2"] = "U2";
    FloodlightActivityUserDefinedVariableTypesEnum["U3"] = "U3";
    FloodlightActivityUserDefinedVariableTypesEnum["U4"] = "U4";
    FloodlightActivityUserDefinedVariableTypesEnum["U5"] = "U5";
    FloodlightActivityUserDefinedVariableTypesEnum["U6"] = "U6";
    FloodlightActivityUserDefinedVariableTypesEnum["U7"] = "U7";
    FloodlightActivityUserDefinedVariableTypesEnum["U8"] = "U8";
    FloodlightActivityUserDefinedVariableTypesEnum["U9"] = "U9";
    FloodlightActivityUserDefinedVariableTypesEnum["U10"] = "U10";
    FloodlightActivityUserDefinedVariableTypesEnum["U11"] = "U11";
    FloodlightActivityUserDefinedVariableTypesEnum["U12"] = "U12";
    FloodlightActivityUserDefinedVariableTypesEnum["U13"] = "U13";
    FloodlightActivityUserDefinedVariableTypesEnum["U14"] = "U14";
    FloodlightActivityUserDefinedVariableTypesEnum["U15"] = "U15";
    FloodlightActivityUserDefinedVariableTypesEnum["U16"] = "U16";
    FloodlightActivityUserDefinedVariableTypesEnum["U17"] = "U17";
    FloodlightActivityUserDefinedVariableTypesEnum["U18"] = "U18";
    FloodlightActivityUserDefinedVariableTypesEnum["U19"] = "U19";
    FloodlightActivityUserDefinedVariableTypesEnum["U20"] = "U20";
    FloodlightActivityUserDefinedVariableTypesEnum["U21"] = "U21";
    FloodlightActivityUserDefinedVariableTypesEnum["U22"] = "U22";
    FloodlightActivityUserDefinedVariableTypesEnum["U23"] = "U23";
    FloodlightActivityUserDefinedVariableTypesEnum["U24"] = "U24";
    FloodlightActivityUserDefinedVariableTypesEnum["U25"] = "U25";
    FloodlightActivityUserDefinedVariableTypesEnum["U26"] = "U26";
    FloodlightActivityUserDefinedVariableTypesEnum["U27"] = "U27";
    FloodlightActivityUserDefinedVariableTypesEnum["U28"] = "U28";
    FloodlightActivityUserDefinedVariableTypesEnum["U29"] = "U29";
    FloodlightActivityUserDefinedVariableTypesEnum["U30"] = "U30";
    FloodlightActivityUserDefinedVariableTypesEnum["U31"] = "U31";
    FloodlightActivityUserDefinedVariableTypesEnum["U32"] = "U32";
    FloodlightActivityUserDefinedVariableTypesEnum["U33"] = "U33";
    FloodlightActivityUserDefinedVariableTypesEnum["U34"] = "U34";
    FloodlightActivityUserDefinedVariableTypesEnum["U35"] = "U35";
    FloodlightActivityUserDefinedVariableTypesEnum["U36"] = "U36";
    FloodlightActivityUserDefinedVariableTypesEnum["U37"] = "U37";
    FloodlightActivityUserDefinedVariableTypesEnum["U38"] = "U38";
    FloodlightActivityUserDefinedVariableTypesEnum["U39"] = "U39";
    FloodlightActivityUserDefinedVariableTypesEnum["U40"] = "U40";
    FloodlightActivityUserDefinedVariableTypesEnum["U41"] = "U41";
    FloodlightActivityUserDefinedVariableTypesEnum["U42"] = "U42";
    FloodlightActivityUserDefinedVariableTypesEnum["U43"] = "U43";
    FloodlightActivityUserDefinedVariableTypesEnum["U44"] = "U44";
    FloodlightActivityUserDefinedVariableTypesEnum["U45"] = "U45";
    FloodlightActivityUserDefinedVariableTypesEnum["U46"] = "U46";
    FloodlightActivityUserDefinedVariableTypesEnum["U47"] = "U47";
    FloodlightActivityUserDefinedVariableTypesEnum["U48"] = "U48";
    FloodlightActivityUserDefinedVariableTypesEnum["U49"] = "U49";
    FloodlightActivityUserDefinedVariableTypesEnum["U50"] = "U50";
    FloodlightActivityUserDefinedVariableTypesEnum["U51"] = "U51";
    FloodlightActivityUserDefinedVariableTypesEnum["U52"] = "U52";
    FloodlightActivityUserDefinedVariableTypesEnum["U53"] = "U53";
    FloodlightActivityUserDefinedVariableTypesEnum["U54"] = "U54";
    FloodlightActivityUserDefinedVariableTypesEnum["U55"] = "U55";
    FloodlightActivityUserDefinedVariableTypesEnum["U56"] = "U56";
    FloodlightActivityUserDefinedVariableTypesEnum["U57"] = "U57";
    FloodlightActivityUserDefinedVariableTypesEnum["U58"] = "U58";
    FloodlightActivityUserDefinedVariableTypesEnum["U59"] = "U59";
    FloodlightActivityUserDefinedVariableTypesEnum["U60"] = "U60";
    FloodlightActivityUserDefinedVariableTypesEnum["U61"] = "U61";
    FloodlightActivityUserDefinedVariableTypesEnum["U62"] = "U62";
    FloodlightActivityUserDefinedVariableTypesEnum["U63"] = "U63";
    FloodlightActivityUserDefinedVariableTypesEnum["U64"] = "U64";
    FloodlightActivityUserDefinedVariableTypesEnum["U65"] = "U65";
    FloodlightActivityUserDefinedVariableTypesEnum["U66"] = "U66";
    FloodlightActivityUserDefinedVariableTypesEnum["U67"] = "U67";
    FloodlightActivityUserDefinedVariableTypesEnum["U68"] = "U68";
    FloodlightActivityUserDefinedVariableTypesEnum["U69"] = "U69";
    FloodlightActivityUserDefinedVariableTypesEnum["U70"] = "U70";
    FloodlightActivityUserDefinedVariableTypesEnum["U71"] = "U71";
    FloodlightActivityUserDefinedVariableTypesEnum["U72"] = "U72";
    FloodlightActivityUserDefinedVariableTypesEnum["U73"] = "U73";
    FloodlightActivityUserDefinedVariableTypesEnum["U74"] = "U74";
    FloodlightActivityUserDefinedVariableTypesEnum["U75"] = "U75";
    FloodlightActivityUserDefinedVariableTypesEnum["U76"] = "U76";
    FloodlightActivityUserDefinedVariableTypesEnum["U77"] = "U77";
    FloodlightActivityUserDefinedVariableTypesEnum["U78"] = "U78";
    FloodlightActivityUserDefinedVariableTypesEnum["U79"] = "U79";
    FloodlightActivityUserDefinedVariableTypesEnum["U80"] = "U80";
    FloodlightActivityUserDefinedVariableTypesEnum["U81"] = "U81";
    FloodlightActivityUserDefinedVariableTypesEnum["U82"] = "U82";
    FloodlightActivityUserDefinedVariableTypesEnum["U83"] = "U83";
    FloodlightActivityUserDefinedVariableTypesEnum["U84"] = "U84";
    FloodlightActivityUserDefinedVariableTypesEnum["U85"] = "U85";
    FloodlightActivityUserDefinedVariableTypesEnum["U86"] = "U86";
    FloodlightActivityUserDefinedVariableTypesEnum["U87"] = "U87";
    FloodlightActivityUserDefinedVariableTypesEnum["U88"] = "U88";
    FloodlightActivityUserDefinedVariableTypesEnum["U89"] = "U89";
    FloodlightActivityUserDefinedVariableTypesEnum["U90"] = "U90";
    FloodlightActivityUserDefinedVariableTypesEnum["U91"] = "U91";
    FloodlightActivityUserDefinedVariableTypesEnum["U92"] = "U92";
    FloodlightActivityUserDefinedVariableTypesEnum["U93"] = "U93";
    FloodlightActivityUserDefinedVariableTypesEnum["U94"] = "U94";
    FloodlightActivityUserDefinedVariableTypesEnum["U95"] = "U95";
    FloodlightActivityUserDefinedVariableTypesEnum["U96"] = "U96";
    FloodlightActivityUserDefinedVariableTypesEnum["U97"] = "U97";
    FloodlightActivityUserDefinedVariableTypesEnum["U98"] = "U98";
    FloodlightActivityUserDefinedVariableTypesEnum["U99"] = "U99";
    FloodlightActivityUserDefinedVariableTypesEnum["U100"] = "U100";
})(FloodlightActivityUserDefinedVariableTypesEnum || (FloodlightActivityUserDefinedVariableTypesEnum = {}));
// FloodlightActivity
/**
 * Contains properties of a Floodlight activity.
**/
var FloodlightActivity = /** @class */ (function (_super) {
    __extends(FloodlightActivity, _super);
    function FloodlightActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], FloodlightActivity.prototype, "advertiserIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributionEnabled" }),
        __metadata("design:type", Boolean)
    ], FloodlightActivity.prototype, "attributionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cacheBustingType" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "cacheBustingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countingMethod" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "countingMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultTags", elemType: FloodlightActivityDynamicTag }),
        __metadata("design:type", Array)
    ], FloodlightActivity.prototype, "defaultTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectedUrl" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "expectedUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightActivityGroupId" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "floodlightActivityGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightActivityGroupName" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "floodlightActivityGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightActivityGroupTagString" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "floodlightActivityGroupTagString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightActivityGroupType" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "floodlightActivityGroupType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightConfigurationId" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "floodlightConfigurationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightConfigurationIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], FloodlightActivity.prototype, "floodlightConfigurationIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightTagType" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "floodlightTagType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], FloodlightActivity.prototype, "idDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherTags", elemType: FloodlightActivityPublisherDynamicTag }),
        __metadata("design:type", Array)
    ], FloodlightActivity.prototype, "publisherTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secure" }),
        __metadata("design:type", Boolean)
    ], FloodlightActivity.prototype, "secure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslCompliant" }),
        __metadata("design:type", Boolean)
    ], FloodlightActivity.prototype, "sslCompliant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslRequired" }),
        __metadata("design:type", Boolean)
    ], FloodlightActivity.prototype, "sslRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccountId" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagFormat" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "tagFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagString" }),
        __metadata("design:type", String)
    ], FloodlightActivity.prototype, "tagString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userDefinedVariableTypes" }),
        __metadata("design:type", Array)
    ], FloodlightActivity.prototype, "userDefinedVariableTypes", void 0);
    return FloodlightActivity;
}(SpeakeasyBase));
export { FloodlightActivity };
