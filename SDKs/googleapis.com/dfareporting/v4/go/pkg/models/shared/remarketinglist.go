package shared

type RemarketingListListSourceEnum string

const (
	RemarketingListListSourceEnumRemarketingListSourceOther     RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_OTHER"
	RemarketingListListSourceEnumRemarketingListSourceAdx       RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_ADX"
	RemarketingListListSourceEnumRemarketingListSourceDfp       RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_DFP"
	RemarketingListListSourceEnumRemarketingListSourceXfp       RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_XFP"
	RemarketingListListSourceEnumRemarketingListSourceDfa       RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_DFA"
	RemarketingListListSourceEnumRemarketingListSourceGa        RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_GA"
	RemarketingListListSourceEnumRemarketingListSourceYoutube   RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_YOUTUBE"
	RemarketingListListSourceEnumRemarketingListSourceDbm       RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_DBM"
	RemarketingListListSourceEnumRemarketingListSourceGplus     RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_GPLUS"
	RemarketingListListSourceEnumRemarketingListSourceDmp       RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_DMP"
	RemarketingListListSourceEnumRemarketingListSourcePlayStore RemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_PLAY_STORE"
)

type RemarketingList struct {
	AccountID                  *string                        `json:"accountId"`
	Active                     *bool                          `json:"active"`
	AdvertiserID               *string                        `json:"advertiserId"`
	AdvertiserIDDimensionValue *DimensionValue                `json:"advertiserIdDimensionValue"`
	Description                *string                        `json:"description"`
	ID                         *string                        `json:"id"`
	Kind                       *string                        `json:"kind"`
	LifeSpan                   *string                        `json:"lifeSpan"`
	ListPopulationRule         *ListPopulationRule            `json:"listPopulationRule"`
	ListSize                   *string                        `json:"listSize"`
	ListSource                 *RemarketingListListSourceEnum `json:"listSource"`
	Name                       *string                        `json:"name"`
	SubaccountID               *string                        `json:"subaccountId"`
}
