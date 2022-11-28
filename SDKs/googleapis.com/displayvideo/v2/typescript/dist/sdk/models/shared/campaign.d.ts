import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignBudget } from "./campaignbudget";
import { CampaignFlight } from "./campaignflight";
import { CampaignGoal } from "./campaigngoal";
import { FrequencyCap } from "./frequencycap";
export declare enum CampaignEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
/**
 * A single campaign.
**/
export declare class Campaign extends SpeakeasyBase {
    advertiserId?: string;
    campaignBudgets?: CampaignBudget[];
    campaignFlight?: CampaignFlight;
    campaignGoal?: CampaignGoal;
    campaignId?: string;
    displayName?: string;
    entityStatus?: CampaignEntityStatusEnum;
    frequencyCap?: FrequencyCap;
    name?: string;
    updateTime?: string;
}
/**
 * A single campaign.
**/
export declare class CampaignInput extends SpeakeasyBase {
    campaignBudgets?: CampaignBudget[];
    campaignFlight?: CampaignFlight;
    campaignGoal?: CampaignGoal;
    displayName?: string;
    entityStatus?: CampaignEntityStatusEnum;
    frequencyCap?: FrequencyCap;
}
