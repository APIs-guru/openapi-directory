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

// TargetableRemarketingList
// Contains properties of a targetable remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource is a read-only view of a remarketing list to be used to faciliate targeting ads to specific lists. Remarketing lists that are owned by your advertisers and those that are shared to your advertisers or account are accessible via this resource. To manage remarketing lists that are owned by your advertisers, use the RemarketingLists resource.
type TargetableRemarketingList struct {
	AccountID                  *string                                  `json:"accountId,omitempty"`
	Active                     *bool                                    `json:"active,omitempty"`
	AdvertiserID               *string                                  `json:"advertiserId,omitempty"`
	AdvertiserIDDimensionValue *DimensionValue                          `json:"advertiserIdDimensionValue,omitempty"`
	Description                *string                                  `json:"description,omitempty"`
	ID                         *string                                  `json:"id,omitempty"`
	Kind                       *string                                  `json:"kind,omitempty"`
	LifeSpan                   *string                                  `json:"lifeSpan,omitempty"`
	ListSize                   *string                                  `json:"listSize,omitempty"`
	ListSource                 *TargetableRemarketingListListSourceEnum `json:"listSource,omitempty"`
	Name                       *string                                  `json:"name,omitempty"`
	SubaccountID               *string                                  `json:"subaccountId,omitempty"`
}
