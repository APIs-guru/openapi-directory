import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuditAdvertiserResponse
/** 
 * Response message for AdvertiserService.AuditAdvertiser.
**/
export class AuditAdvertiserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=adGroupCriteriaCount" })
  adGroupCriteriaCount?: string;

  @Metadata({ data: "json, name=campaignCriteriaCount" })
  campaignCriteriaCount?: string;

  @Metadata({ data: "json, name=channelsCount" })
  channelsCount?: string;

  @Metadata({ data: "json, name=negativeKeywordListsCount" })
  negativeKeywordListsCount?: string;

  @Metadata({ data: "json, name=negativelyTargetedChannelsCount" })
  negativelyTargetedChannelsCount?: string;

  @Metadata({ data: "json, name=usedCampaignsCount" })
  usedCampaignsCount?: string;

  @Metadata({ data: "json, name=usedInsertionOrdersCount" })
  usedInsertionOrdersCount?: string;

  @Metadata({ data: "json, name=usedLineItemsCount" })
  usedLineItemsCount?: string;
}
