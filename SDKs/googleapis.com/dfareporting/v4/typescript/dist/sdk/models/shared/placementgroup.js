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
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { PricingSchedule } from "./pricingschedule";
export var PlacementGroupActiveStatusEnum;
(function (PlacementGroupActiveStatusEnum) {
    PlacementGroupActiveStatusEnum["PlacementStatusUnknown"] = "PLACEMENT_STATUS_UNKNOWN";
    PlacementGroupActiveStatusEnum["PlacementStatusActive"] = "PLACEMENT_STATUS_ACTIVE";
    PlacementGroupActiveStatusEnum["PlacementStatusInactive"] = "PLACEMENT_STATUS_INACTIVE";
    PlacementGroupActiveStatusEnum["PlacementStatusArchived"] = "PLACEMENT_STATUS_ARCHIVED";
    PlacementGroupActiveStatusEnum["PlacementStatusPermanentlyArchived"] = "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED";
})(PlacementGroupActiveStatusEnum || (PlacementGroupActiveStatusEnum = {}));
export var PlacementGroupPlacementGroupTypeEnum;
(function (PlacementGroupPlacementGroupTypeEnum) {
    PlacementGroupPlacementGroupTypeEnum["PlacementPackage"] = "PLACEMENT_PACKAGE";
    PlacementGroupPlacementGroupTypeEnum["PlacementRoadblock"] = "PLACEMENT_ROADBLOCK";
})(PlacementGroupPlacementGroupTypeEnum || (PlacementGroupPlacementGroupTypeEnum = {}));
// PlacementGroup
/**
 * Contains properties of a package or roadblock.
**/
var PlacementGroup = /** @class */ (function (_super) {
    __extends(PlacementGroup, _super);
    function PlacementGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], PlacementGroup.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeStatus" }),
        __metadata("design:type", String)
    ], PlacementGroup.prototype, "activeStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], PlacementGroup.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], PlacementGroup.prototype, "advertiserIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignId" }),
        __metadata("design:type", String)
    ], PlacementGroup.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], PlacementGroup.prototype, "campaignIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childPlacementIds" }),
        __metadata("design:type", Array)
    ], PlacementGroup.prototype, "childPlacementIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], PlacementGroup.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentCategoryId" }),
        __metadata("design:type", String)
    ], PlacementGroup.prototype, "contentCategoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createInfo" }),
        __metadata("design:type", LastModifiedInfo)
    ], PlacementGroup.prototype, "createInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directorySiteId" }),
        __metadata("design:type", String)
    ], PlacementGroup.prototype, "directorySiteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directorySiteIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], PlacementGroup.prototype, "directorySiteIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], PlacementGroup.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PlacementGroup.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], PlacementGroup.prototype, "idDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], PlacementGroup.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedInfo" }),
        __metadata("design:type", LastModifiedInfo)
    ], PlacementGroup.prototype, "lastModifiedInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PlacementGroup.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementGroupType" }),
        __metadata("design:type", String)
    ], PlacementGroup.prototype, "placementGroupType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementStrategyId" }),
        __metadata("design:type", String)
    ], PlacementGroup.prototype, "placementStrategyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pricingSchedule" }),
        __metadata("design:type", PricingSchedule)
    ], PlacementGroup.prototype, "pricingSchedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryPlacementId" }),
        __metadata("design:type", String)
    ], PlacementGroup.prototype, "primaryPlacementId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryPlacementIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], PlacementGroup.prototype, "primaryPlacementIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteId" }),
        __metadata("design:type", String)
    ], PlacementGroup.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], PlacementGroup.prototype, "siteIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccountId" }),
        __metadata("design:type", String)
    ], PlacementGroup.prototype, "subaccountId", void 0);
    return PlacementGroup;
}(SpeakeasyBase));
export { PlacementGroup };
