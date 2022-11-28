import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdSlot } from "./adslot";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { Pricing } from "./pricing";


export enum InventoryItemTypeEnum {
    PlanningPlacementTypeRegular = "PLANNING_PLACEMENT_TYPE_REGULAR",
    PlanningPlacementTypeCredit = "PLANNING_PLACEMENT_TYPE_CREDIT"
}


// InventoryItem
/** 
 * Represents a buy from the Planning inventory store.
**/
export class InventoryItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=adSlots", elemType: AdSlot })
  adSlots?: AdSlot[];

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=contentCategoryId" })
  contentCategoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=estimatedClickThroughRate" })
  estimatedClickThroughRate?: string;

  @SpeakeasyMetadata({ data: "json, name=estimatedConversionRate" })
  estimatedConversionRate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=inPlan" })
  inPlan?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedInfo" })
  lastModifiedInfo?: LastModifiedInfo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=negotiationChannelId" })
  negotiationChannelId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=placementStrategyId" })
  placementStrategyId?: string;

  @SpeakeasyMetadata({ data: "json, name=pricing" })
  pricing?: Pricing;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=rfpId" })
  rfpId?: string;

  @SpeakeasyMetadata({ data: "json, name=siteId" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InventoryItemTypeEnum;
}
