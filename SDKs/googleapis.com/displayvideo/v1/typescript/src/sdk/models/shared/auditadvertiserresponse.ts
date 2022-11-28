import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuditAdvertiserResponse
/** 
 * Response message for AdvertiserService.AuditAdvertiser.
**/
export class AuditAdvertiserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adGroupCriteriaCount" })
  adGroupCriteriaCount?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignCriteriaCount" })
  campaignCriteriaCount?: string;

  @SpeakeasyMetadata({ data: "json, name=channelsCount" })
  channelsCount?: string;

  @SpeakeasyMetadata({ data: "json, name=negativeKeywordListsCount" })
  negativeKeywordListsCount?: string;

  @SpeakeasyMetadata({ data: "json, name=negativelyTargetedChannelsCount" })
  negativelyTargetedChannelsCount?: string;

  @SpeakeasyMetadata({ data: "json, name=usedCampaignsCount" })
  usedCampaignsCount?: string;

  @SpeakeasyMetadata({ data: "json, name=usedInsertionOrdersCount" })
  usedInsertionOrdersCount?: string;

  @SpeakeasyMetadata({ data: "json, name=usedLineItemsCount" })
  usedLineItemsCount?: string;
}
