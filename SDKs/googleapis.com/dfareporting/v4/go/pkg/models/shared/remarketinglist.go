package shared




type RemarketingListListSourceEnum string

const (
    RemarketingListListSourceEnumRemarketingListSourceOther RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_OTHER"
RemarketingListListSourceEnumRemarketingListSourceAdx RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_ADX"
RemarketingListListSourceEnumRemarketingListSourceDfp RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_DFP"
RemarketingListListSourceEnumRemarketingListSourceXfp RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_XFP"
RemarketingListListSourceEnumRemarketingListSourceDfa RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_DFA"
RemarketingListListSourceEnumRemarketingListSourceGa RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_GA"
RemarketingListListSourceEnumRemarketingListSourceYoutube RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_YOUTUBE"
RemarketingListListSourceEnumRemarketingListSourceDbm RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_DBM"
RemarketingListListSourceEnumRemarketingListSourceGplus RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_GPLUS"
RemarketingListListSourceEnumRemarketingListSourceDmp RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_DMP"
RemarketingListListSourceEnumRemarketingListSourcePlayStore RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_PLAY_STORE"
)


type RemarketingList struct {
    AccountID *string `json:"accountId,omitempty"`
    Active *bool `json:"active,omitempty"`
    AdvertiserID *string `json:"advertiserId,omitempty"`
    AdvertiserIDDimensionValue *DimensionValue `json:"advertiserIdDimensionValue,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LifeSpan *string `json:"lifeSpan,omitempty"`
    ListPopulationRule *ListPopulationRule `json:"listPopulationRule,omitempty"`
    ListSize *string `json:"listSize,omitempty"`
    ListSource *RemarketingListListSourceEnum `json:"listSource,omitempty"`
    Name *string `json:"name,omitempty"`
    SubaccountID *string `json:"subaccountId,omitempty"`
    
}

