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
import { AdBlockingConfiguration } from "./adblockingconfiguration";
import { CreativeOptimizationConfiguration } from "./creativeoptimizationconfiguration";
import { DimensionValue } from "./dimensionvalue";
import { AudienceSegmentGroup } from "./audiencesegmentgroup";
import { ClickThroughUrlSuffixProperties } from "./clickthroughurlsuffixproperties";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { DefaultClickThroughEventTagProperties } from "./defaultclickthrougheventtagproperties";
import { EventTagOverride } from "./eventtagoverride";
import { MeasurementPartnerCampaignLink } from "./measurementpartnercampaignlink";
// Campaign
/**
 * Contains properties of a Campaign Manager campaign.
**/
var Campaign = /** @class */ (function (_super) {
    __extends(Campaign, _super);
    function Campaign() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adBlockingConfiguration" }),
        __metadata("design:type", AdBlockingConfiguration)
    ], Campaign.prototype, "adBlockingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalCreativeOptimizationConfigurations", elemType: CreativeOptimizationConfiguration }),
        __metadata("design:type", Array)
    ], Campaign.prototype, "additionalCreativeOptimizationConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserGroupId" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "advertiserGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], Campaign.prototype, "advertiserIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], Campaign.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audienceSegmentGroups", elemType: AudienceSegmentGroup }),
        __metadata("design:type", Array)
    ], Campaign.prototype, "audienceSegmentGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingInvoiceCode" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "billingInvoiceCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickThroughUrlSuffixProperties" }),
        __metadata("design:type", ClickThroughUrlSuffixProperties)
    ], Campaign.prototype, "clickThroughUrlSuffixProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createInfo" }),
        __metadata("design:type", LastModifiedInfo)
    ], Campaign.prototype, "createInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeGroupIds" }),
        __metadata("design:type", Array)
    ], Campaign.prototype, "creativeGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeOptimizationConfiguration" }),
        __metadata("design:type", CreativeOptimizationConfiguration)
    ], Campaign.prototype, "creativeOptimizationConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultClickThroughEventTagProperties" }),
        __metadata("design:type", DefaultClickThroughEventTagProperties)
    ], Campaign.prototype, "defaultClickThroughEventTagProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultLandingPageId" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "defaultLandingPageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], Campaign.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTagOverrides", elemType: EventTagOverride }),
        __metadata("design:type", Array)
    ], Campaign.prototype, "eventTagOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], Campaign.prototype, "idDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedInfo" }),
        __metadata("design:type", LastModifiedInfo)
    ], Campaign.prototype, "lastModifiedInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=measurementPartnerLink" }),
        __metadata("design:type", MeasurementPartnerCampaignLink)
    ], Campaign.prototype, "measurementPartnerLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], Campaign.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccountId" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "subaccountId", void 0);
    return Campaign;
}(SpeakeasyBase));
export { Campaign };
