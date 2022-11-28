import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { PricingSchedule } from "./pricingschedule";
export declare enum PlacementGroupPlacementGroupTypeEnum {
    PlacementPackage = "PLACEMENT_PACKAGE",
    PlacementRoadblock = "PLACEMENT_ROADBLOCK"
}
/**
 * Contains properties of a package or roadblock.
**/
export declare class PlacementGroup extends SpeakeasyBase {
    accountId?: string;
    advertiserId?: string;
    advertiserIdDimensionValue?: DimensionValue;
    archived?: boolean;
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
