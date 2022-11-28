import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignBudget } from "./campaignbudget";
import { CampaignFlight } from "./campaignflight";
import { CampaignGoal } from "./campaigngoal";
import { FrequencyCap } from "./frequencycap";


export enum CampaignEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}


// Campaign
/** 
 * A single campaign.
**/
export class Campaign extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignBudgets", elemType: CampaignBudget })
  campaignBudgets?: CampaignBudget[];

  @SpeakeasyMetadata({ data: "json, name=campaignFlight" })
  campaignFlight?: CampaignFlight;

  @SpeakeasyMetadata({ data: "json, name=campaignGoal" })
  campaignGoal?: CampaignGoal;

  @SpeakeasyMetadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityStatus" })
  entityStatus?: CampaignEntityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=frequencyCap" })
  frequencyCap?: FrequencyCap;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// CampaignInput
/** 
 * A single campaign.
**/
export class CampaignInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignBudgets", elemType: CampaignBudget })
  campaignBudgets?: CampaignBudget[];

  @SpeakeasyMetadata({ data: "json, name=campaignFlight" })
  campaignFlight?: CampaignFlight;

  @SpeakeasyMetadata({ data: "json, name=campaignGoal" })
  campaignGoal?: CampaignGoal;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityStatus" })
  entityStatus?: CampaignEntityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=frequencyCap" })
  frequencyCap?: FrequencyCap;
}
