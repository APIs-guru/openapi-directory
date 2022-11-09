import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionValue } from "./dimensionvalue";
import { DimensionValue } from "./dimensionvalue";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { DimensionValue } from "./dimensionvalue";
import { DimensionValue } from "./dimensionvalue";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { PricingSchedule } from "./pricingschedule";
import { DimensionValue } from "./dimensionvalue";
import { DimensionValue } from "./dimensionvalue";

export enum PlacementGroupPlacementGroupTypeEnum {
    PlacementPackage = "PLACEMENT_PACKAGE"
,    PlacementRoadblock = "PLACEMENT_ROADBLOCK"
}


// PlacementGroup
/** 
 * Contains properties of a package or roadblock.
**/
export class PlacementGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @Metadata({ data: "json, name=campaignIdDimensionValue" })
  campaignIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=childPlacementIds" })
  childPlacementIds?: string[];

  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=contentCategoryId" })
  contentCategoryId?: string;

  @Metadata({ data: "json, name=createInfo" })
  createInfo?: LastModifiedInfo;

  @Metadata({ data: "json, name=directorySiteId" })
  directorySiteId?: string;

  @Metadata({ data: "json, name=directorySiteIdDimensionValue" })
  directorySiteIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastModifiedInfo" })
  lastModifiedInfo?: LastModifiedInfo;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=placementGroupType" })
  placementGroupType?: PlacementGroupPlacementGroupTypeEnum;

  @Metadata({ data: "json, name=placementStrategyId" })
  placementStrategyId?: string;

  @Metadata({ data: "json, name=pricingSchedule" })
  pricingSchedule?: PricingSchedule;

  @Metadata({ data: "json, name=primaryPlacementId" })
  primaryPlacementId?: string;

  @Metadata({ data: "json, name=primaryPlacementIdDimensionValue" })
  primaryPlacementIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=siteId" })
  siteId?: string;

  @Metadata({ data: "json, name=siteIdDimensionValue" })
  siteIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;
}
