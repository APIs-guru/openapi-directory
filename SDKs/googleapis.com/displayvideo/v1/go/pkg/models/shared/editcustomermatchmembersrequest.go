package shared

type EditCustomerMatchMembersRequest struct {
	AddedContactInfoList    *ContactInfoList    `json:"addedContactInfoList"`
	AddedMobileDeviceIDList *MobileDeviceIDList `json:"addedMobileDeviceIdList"`
	AdvertiserID            *string             `json:"advertiserId"`
}
