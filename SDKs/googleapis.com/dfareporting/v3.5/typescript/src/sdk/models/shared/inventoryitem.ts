import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdSlot } from "./adslot";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { Pricing } from "./pricing";

export enum InventoryItemTypeEnum {
    PlanningPlacementTypeRegular = "PLANNING_PLACEMENT_TYPE_REGULAR"
,    PlanningPlacementTypeCredit = "PLANNING_PLACEMENT_TYPE_CREDIT"
}


// InventoryItem
/** 
 * Represents a buy from the Planning inventory store.
**/
export class InventoryItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=adSlots", elemType: shared.AdSlot })
  adSlots?: AdSlot[];

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=contentCategoryId" })
  contentCategoryId?: string;

  @Metadata({ data: "json, name=estimatedClickThroughRate" })
  estimatedClickThroughRate?: string;

  @Metadata({ data: "json, name=estimatedConversionRate" })
  estimatedConversionRate?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=inPlan" })
  inPlan?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastModifiedInfo" })
  lastModifiedInfo?: LastModifiedInfo;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=negotiationChannelId" })
  negotiationChannelId?: string;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=placementStrategyId" })
  placementStrategyId?: string;

  @Metadata({ data: "json, name=pricing" })
  pricing?: Pricing;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=rfpId" })
  rfpId?: string;

  @Metadata({ data: "json, name=siteId" })
  siteId?: string;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=type" })
  type?: InventoryItemTypeEnum;
}
