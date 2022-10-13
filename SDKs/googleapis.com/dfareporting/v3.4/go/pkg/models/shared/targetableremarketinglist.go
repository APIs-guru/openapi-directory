package shared

type TargetableRemarketingListListSourceEnum string

const (
	TargetableRemarketingListListSourceEnumRemarketingListSourceOther     TargetableRemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_OTHER"
	TargetableRemarketingListListSourceEnumRemarketingListSourceAdx       TargetableRemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_ADX"
	TargetableRemarketingListListSourceEnumRemarketingListSourceDfp       TargetableRemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_DFP"
	TargetableRemarketingListListSourceEnumRemarketingListSourceXfp       TargetableRemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_XFP"
	TargetableRemarketingListListSourceEnumRemarketingListSourceDfa       TargetableRemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_DFA"
	TargetableRemarketingListListSourceEnumRemarketingListSourceGa        TargetableRemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_GA"
	TargetableRemarketingListListSourceEnumRemarketingListSourceYoutube   TargetableRemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_YOUTUBE"
	TargetableRemarketingListListSourceEnumRemarketingListSourceDbm       TargetableRemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_DBM"
	TargetableRemarketingListListSourceEnumRemarketingListSourceGplus     TargetableRemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_GPLUS"
	TargetableRemarketingListListSourceEnumRemarketingListSourceDmp       TargetableRemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_DMP"
	TargetableRemarketingListListSourceEnumRemarketingListSourcePlayStore TargetableRemarketingListListSourceEnum = "REMARKETING_LIST_SOURCE_PLAY_STORE"
)

type TargetableRemarketingList struct {
	AccountID                  *string                                  `json:"accountId"`
	Active                     *bool                                    `json:"active"`
	AdvertiserID               *string                                  `json:"advertiserId"`
	AdvertiserIDDimensionValue *DimensionValue                          `json:"advertiserIdDimensionValue"`
	Description                *string                                  `json:"description"`
	ID                         *string                                  `json:"id"`
	Kind                       *string                                  `json:"kind"`
	LifeSpan                   *string                                  `json:"lifeSpan"`
	ListSize                   *string                                  `json:"listSize"`
	ListSource                 *TargetableRemarketingListListSourceEnum `json:"listSource"`
	Name                       *string                                  `json:"name"`
	SubaccountID               *string                                  `json:"subaccountId"`
}
