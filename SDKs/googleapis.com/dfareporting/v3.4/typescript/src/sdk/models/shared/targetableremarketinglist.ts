import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionValue } from "./dimensionvalue";

export enum TargetableRemarketingListListSourceEnum {
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


// TargetableRemarketingList
/** 
 * Contains properties of a targetable remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource is a read-only view of a remarketing list to be used to faciliate targeting ads to specific lists. Remarketing lists that are owned by your advertisers and those that are shared to your advertisers or account are accessible via this resource. To manage remarketing lists that are owned by your advertisers, use the RemarketingLists resource.
**/
export class TargetableRemarketingList extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=listSize" })
  listSize?: string;

  @Metadata({ data: "json, name=listSource" })
  listSource?: TargetableRemarketingListListSourceEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;
}
