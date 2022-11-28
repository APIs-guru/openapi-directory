import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for AdvertiserService.AuditAdvertiser.
**/
export declare class AuditAdvertiserResponse extends SpeakeasyBase {
    adGroupCriteriaCount?: string;
    campaignCriteriaCount?: string;
    channelsCount?: string;
    negativeKeywordListsCount?: string;
    negativelyTargetedChannelsCount?: string;
    usedCampaignsCount?: string;
    usedInsertionOrdersCount?: string;
    usedLineItemsCount?: string;
}
