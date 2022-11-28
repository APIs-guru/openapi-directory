import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { PricingSchedule } from "./pricingschedule";


export enum PlacementGroupActiveStatusEnum {
    PlacementStatusUnknown = "PLACEMENT_STATUS_UNKNOWN",
    PlacementStatusActive = "PLACEMENT_STATUS_ACTIVE",
    PlacementStatusInactive = "PLACEMENT_STATUS_INACTIVE",
    PlacementStatusArchived = "PLACEMENT_STATUS_ARCHIVED",
    PlacementStatusPermanentlyArchived = "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"
}

export enum PlacementGroupPlacementGroupTypeEnum {
    PlacementPackage = "PLACEMENT_PACKAGE",
    PlacementRoadblock = "PLACEMENT_ROADBLOCK"
}


// PlacementGroup
/** 
 * Contains properties of a package or roadblock.
**/
export class PlacementGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=activeStatus" })
  activeStatus?: PlacementGroupActiveStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignIdDimensionValue" })
  campaignIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=childPlacementIds" })
  childPlacementIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=contentCategoryId" })
  contentCategoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=createInfo" })
  createInfo?: LastModifiedInfo;

  @SpeakeasyMetadata({ data: "json, name=directorySiteId" })
  directorySiteId?: string;

  @SpeakeasyMetadata({ data: "json, name=directorySiteIdDimensionValue" })
  directorySiteIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedInfo" })
  lastModifiedInfo?: LastModifiedInfo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=placementGroupType" })
  placementGroupType?: PlacementGroupPlacementGroupTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=placementStrategyId" })
  placementStrategyId?: string;

  @SpeakeasyMetadata({ data: "json, name=pricingSchedule" })
  pricingSchedule?: PricingSchedule;

  @SpeakeasyMetadata({ data: "json, name=primaryPlacementId" })
  primaryPlacementId?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryPlacementIdDimensionValue" })
  primaryPlacementIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=siteId" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "json, name=siteIdDimensionValue" })
  siteIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;
}
