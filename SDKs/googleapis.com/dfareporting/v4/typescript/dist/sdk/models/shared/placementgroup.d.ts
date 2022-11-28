import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { PricingSchedule } from "./pricingschedule";
export declare enum PlacementGroupActiveStatusEnum {
    PlacementStatusUnknown = "PLACEMENT_STATUS_UNKNOWN",
    PlacementStatusActive = "PLACEMENT_STATUS_ACTIVE",
    PlacementStatusInactive = "PLACEMENT_STATUS_INACTIVE",
    PlacementStatusArchived = "PLACEMENT_STATUS_ARCHIVED",
    PlacementStatusPermanentlyArchived = "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"
}
export declare enum PlacementGroupPlacementGroupTypeEnum {
    PlacementPackage = "PLACEMENT_PACKAGE",
    PlacementRoadblock = "PLACEMENT_ROADBLOCK"
}
/**
 * Contains properties of a package or roadblock.
**/
export declare class PlacementGroup extends SpeakeasyBase {
    accountId?: string;
    activeStatus?: PlacementGroupActiveStatusEnum;
    advertiserId?: string;
    advertiserIdDimensionValue?: DimensionValue;
    campaignId?: string;
    campaignIdDimensionValue?: DimensionValue;
    childPlacementIds?: string[];
    comment?: string;
    contentCategoryId?: string;
    createInfo?: LastModifiedInfo;
    directorySiteId?: string;
    directorySiteIdDimensionValue?: DimensionValue;
    externalId?: string;
    id?: string;
    idDimensionValue?: DimensionValue;
    kind?: string;
    lastModifiedInfo?: LastModifiedInfo;
    name?: string;
    placementGroupType?: PlacementGroupPlacementGroupTypeEnum;
    placementStrategyId?: string;
    pricingSchedule?: PricingSchedule;
    primaryPlacementId?: string;
    primaryPlacementIdDimensionValue?: DimensionValue;
    siteId?: string;
    siteIdDimensionValue?: DimensionValue;
    subaccountId?: string;
}
