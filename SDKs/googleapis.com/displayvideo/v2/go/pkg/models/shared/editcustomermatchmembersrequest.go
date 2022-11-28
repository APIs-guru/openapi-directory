package shared

// EditCustomerMatchMembersRequest
// Request message for FirstAndThirdPartyAudienceService.EditCustomerMatchMembers.
type EditCustomerMatchMembersRequest struct {
	AddedContactInfoList    *ContactInfoList    `json:"addedContactInfoList,omitempty"`
	AddedMobileDeviceIDList *MobileDeviceIDList `json:"addedMobileDeviceIdList,omitempty"`
	AdvertiserID            *string             `json:"advertiserId,omitempty"`
}
