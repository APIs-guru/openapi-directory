import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { ListPopulationRule } from "./listpopulationrule";
export declare enum RemarketingListListSourceEnum {
    RemarketingListSourceOther = "REMARKETING_LIST_SOURCE_OTHER",
    RemarketingListSourceAdx = "REMARKETING_LIST_SOURCE_ADX",
    RemarketingListSourceDfp = "REMARKETING_LIST_SOURCE_DFP",
    RemarketingListSourceXfp = "REMARKETING_LIST_SOURCE_XFP",
    RemarketingListSourceDfa = "REMARKETING_LIST_SOURCE_DFA",
    RemarketingListSourceGa = "REMARKETING_LIST_SOURCE_GA",
    RemarketingListSourceYoutube = "REMARKETING_LIST_SOURCE_YOUTUBE",
    RemarketingListSourceDbm = "REMARKETING_LIST_SOURCE_DBM",
    RemarketingListSourceGplus = "REMARKETING_LIST_SOURCE_GPLUS",
    RemarketingListSourceDmp = "REMARKETING_LIST_SOURCE_DMP",
    RemarketingListSourcePlayStore = "REMARKETING_LIST_SOURCE_PLAY_STORE"
}
/**
 * Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that are shared to your advertiser or account, use the TargetableRemarketingLists resource.
**/
export declare class RemarketingList extends SpeakeasyBase {
    accountId?: string;
    active?: boolean;
    advertiserId?: string;
    advertiserIdDimensionValue?: DimensionValue;
    description?: string;
    id?: string;
    kind?: string;
    lifeSpan?: string;
    listPopulationRule?: ListPopulationRule;
    listSize?: string;
    listSource?: RemarketingListListSourceEnum;
    name?: string;
    subaccountId?: string;
}
