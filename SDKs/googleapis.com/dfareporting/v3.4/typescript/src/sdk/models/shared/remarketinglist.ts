import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionValue } from "./dimensionvalue";
import { ListPopulationRule } from "./listpopulationrule";

export enum RemarketingListListSourceEnum {
    RemarketingListSourceOther = "REMARKETING_LIST_SOURCE_OTHER"
,    RemarketingListSourceAdx = "REMARKETING_LIST_SOURCE_ADX"
,    RemarketingListSourceDfp = "REMARKETING_LIST_SOURCE_DFP"
,    RemarketingListSourceXfp = "REMARKETING_LIST_SOURCE_XFP"
,    RemarketingListSourceDfa = "REMARKETING_LIST_SOURCE_DFA"
,    RemarketingListSourceGa = "REMARKETING_LIST_SOURCE_GA"
,    RemarketingListSourceYoutube = "REMARKETING_LIST_SOURCE_YOUTUBE"
,    RemarketingListSourceDbm = "REMARKETING_LIST_SOURCE_DBM"
,    RemarketingListSourceGplus = "REMARKETING_LIST_SOURCE_GPLUS"
,    RemarketingListSourceDmp = "REMARKETING_LIST_SOURCE_DMP"
,    RemarketingListSourcePlayStore = "REMARKETING_LIST_SOURCE_PLAY_STORE"
}


// RemarketingList
/** 
 * Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that are shared to your advertiser or account, use the TargetableRemarketingLists resource.
**/
export class RemarketingList extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lifeSpan" })
  lifeSpan?: string;

  @Metadata({ data: "json, name=listPopulationRule" })
  listPopulationRule?: ListPopulationRule;

  @Metadata({ data: "json, name=listSize" })
  listSize?: string;

  @Metadata({ data: "json, name=listSource" })
  listSource?: RemarketingListListSourceEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;
}
