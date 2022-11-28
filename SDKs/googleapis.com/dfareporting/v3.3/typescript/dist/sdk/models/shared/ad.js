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
import { ClickThroughUrl } from "./clickthroughurl";
import { ClickThroughUrlSuffixProperties } from "./clickthroughurlsuffixproperties";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { CreativeGroupAssignment } from "./creativegroupassignment";
import { CreativeRotation } from "./creativerotation";
import { DayPartTargeting } from "./dayparttargeting";
import { DefaultClickThroughEventTagProperties } from "./defaultclickthrougheventtagproperties";
import { DeliverySchedule } from "./deliveryschedule";
import { EventTagOverride } from "./eventtagoverride";
import { GeoTargeting } from "./geotargeting";
import { KeyValueTargetingExpression } from "./keyvaluetargetingexpression";
import { LanguageTargeting } from "./languagetargeting";
import { PlacementAssignment } from "./placementassignment";
import { ListTargetingExpression } from "./listtargetingexpression";
import { Size } from "./size";
import { TechnologyTargeting } from "./technologytargeting";
export var AdCompatibilityEnum;
(function (AdCompatibilityEnum) {
    AdCompatibilityEnum["Display"] = "DISPLAY";
    AdCompatibilityEnum["DisplayInterstitial"] = "DISPLAY_INTERSTITIAL";
    AdCompatibilityEnum["App"] = "APP";
    AdCompatibilityEnum["AppInterstitial"] = "APP_INTERSTITIAL";
    AdCompatibilityEnum["InStreamVideo"] = "IN_STREAM_VIDEO";
    AdCompatibilityEnum["InStreamAudio"] = "IN_STREAM_AUDIO";
})(AdCompatibilityEnum || (AdCompatibilityEnum = {}));
export var AdTypeEnum;
(function (AdTypeEnum) {
    AdTypeEnum["AdServingStandardAd"] = "AD_SERVING_STANDARD_AD";
    AdTypeEnum["AdServingDefaultAd"] = "AD_SERVING_DEFAULT_AD";
    AdTypeEnum["AdServingClickTracker"] = "AD_SERVING_CLICK_TRACKER";
    AdTypeEnum["AdServingTracking"] = "AD_SERVING_TRACKING";
    AdTypeEnum["AdServingBrandSafeAd"] = "AD_SERVING_BRAND_SAFE_AD";
})(AdTypeEnum || (AdTypeEnum = {}));
// Ad
/**
 * Contains properties of a Campaign Manager ad.
**/
var Ad = /** @class */ (function (_super) {
    __extends(Ad, _super);
    function Ad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Ad.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], Ad.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], Ad.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], Ad.prototype, "advertiserIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], Ad.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audienceSegmentId" }),
        __metadata("design:type", String)
    ], Ad.prototype, "audienceSegmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignId" }),
        __metadata("design:type", String)
    ], Ad.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], Ad.prototype, "campaignIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickThroughUrl" }),
        __metadata("design:type", ClickThroughUrl)
    ], Ad.prototype, "clickThroughUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickThroughUrlSuffixProperties" }),
        __metadata("design:type", ClickThroughUrlSuffixProperties)
    ], Ad.prototype, "clickThroughUrlSuffixProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], Ad.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compatibility" }),
        __metadata("design:type", String)
    ], Ad.prototype, "compatibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createInfo" }),
        __metadata("design:type", LastModifiedInfo)
    ], Ad.prototype, "createInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeGroupAssignments", elemType: CreativeGroupAssignment }),
        __metadata("design:type", Array)
    ], Ad.prototype, "creativeGroupAssignments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeRotation" }),
        __metadata("design:type", CreativeRotation)
    ], Ad.prototype, "creativeRotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayPartTargeting" }),
        __metadata("design:type", DayPartTargeting)
    ], Ad.prototype, "dayPartTargeting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultClickThroughEventTagProperties" }),
        __metadata("design:type", DefaultClickThroughEventTagProperties)
    ], Ad.prototype, "defaultClickThroughEventTagProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliverySchedule" }),
        __metadata("design:type", DeliverySchedule)
    ], Ad.prototype, "deliverySchedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicClickTracker" }),
        __metadata("design:type", Boolean)
    ], Ad.prototype, "dynamicClickTracker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], Ad.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTagOverrides", elemType: EventTagOverride }),
        __metadata("design:type", Array)
    ], Ad.prototype, "eventTagOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geoTargeting" }),
        __metadata("design:type", GeoTargeting)
    ], Ad.prototype, "geoTargeting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Ad.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], Ad.prototype, "idDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyValueTargetingExpression" }),
        __metadata("design:type", KeyValueTargetingExpression)
    ], Ad.prototype, "keyValueTargetingExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Ad.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageTargeting" }),
        __metadata("design:type", LanguageTargeting)
    ], Ad.prototype, "languageTargeting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedInfo" }),
        __metadata("design:type", LastModifiedInfo)
    ], Ad.prototype, "lastModifiedInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Ad.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementAssignments", elemType: PlacementAssignment }),
        __metadata("design:type", Array)
    ], Ad.prototype, "placementAssignments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remarketingListExpression" }),
        __metadata("design:type", ListTargetingExpression)
    ], Ad.prototype, "remarketingListExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Size)
    ], Ad.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslCompliant" }),
        __metadata("design:type", Boolean)
    ], Ad.prototype, "sslCompliant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslRequired" }),
        __metadata("design:type", Boolean)
    ], Ad.prototype, "sslRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], Ad.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccountId" }),
        __metadata("design:type", String)
    ], Ad.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingTemplateId" }),
        __metadata("design:type", String)
    ], Ad.prototype, "targetingTemplateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=technologyTargeting" }),
        __metadata("design:type", TechnologyTargeting)
    ], Ad.prototype, "technologyTargeting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Ad.prototype, "type", void 0);
    return Ad;
}(SpeakeasyBase));
export { Ad };
