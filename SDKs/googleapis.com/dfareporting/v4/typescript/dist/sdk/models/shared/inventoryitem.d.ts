import { SpeakeasyBase } from "../../../internal/utils";
import { AdSlot } from "./adslot";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { Pricing } from "./pricing";
export declare enum InventoryItemTypeEnum {
    PlanningPlacementTypeRegular = "PLANNING_PLACEMENT_TYPE_REGULAR",
    PlanningPlacementTypeCredit = "PLANNING_PLACEMENT_TYPE_CREDIT"
}
/**
 * Represents a buy from the Planning inventory store.
**/
export declare class InventoryItem extends SpeakeasyBase {
    accountId?: string;
    adSlots?: AdSlot[];
    advertiserId?: string;
    contentCategoryId?: string;
    estimatedClickThroughRate?: string;
    estimatedConversionRate?: string;
    id?: string;
    inPlan?: boolean;
    kind?: string;
    lastModifiedInfo?: LastModifiedInfo;
    name?: string;
    negotiationChannelId?: string;
    orderId?: string;
    placementStrategyId?: string;
    pricing?: Pricing;
    projectId?: string;
    rfpId?: string;
    siteId?: string;
    subaccountId?: string;
    type?: InventoryItemTypeEnum;
}
