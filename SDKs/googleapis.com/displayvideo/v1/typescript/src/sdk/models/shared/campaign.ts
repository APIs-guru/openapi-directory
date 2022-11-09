import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CampaignBudget } from "./campaignbudget";
import { CampaignFlight } from "./campaignflight";
import { CampaignGoal } from "./campaigngoal";
import { FrequencyCap } from "./frequencycap";

export enum CampaignEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED"
,    EntityStatusActive = "ENTITY_STATUS_ACTIVE"
,    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED"
,    EntityStatusDraft = "ENTITY_STATUS_DRAFT"
,    EntityStatusPaused = "ENTITY_STATUS_PAUSED"
,    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}


// Campaign
/** 
 * A single campaign.
**/
export class Campaign extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=campaignBudgets", elemType: shared.CampaignBudget })
  campaignBudgets?: CampaignBudget[];

  @Metadata({ data: "json, name=campaignFlight" })
  campaignFlight?: CampaignFlight;

  @Metadata({ data: "json, name=campaignGoal" })
  campaignGoal?: CampaignGoal;

  @Metadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=entityStatus" })
  entityStatus?: CampaignEntityStatusEnum;

  @Metadata({ data: "json, name=frequencyCap" })
  frequencyCap?: FrequencyCap;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
