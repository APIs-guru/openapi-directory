package shared

type AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum string

const (
	AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnumAuthorizedSellerStatusUnspecified                             AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum = "AUTHORIZED_SELLER_STATUS_UNSPECIFIED"
	AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnumAuthorizedSellerStatusAuthorizedDirectSellersOnly             AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum = "AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY"
	AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnumAuthorizedSellerStatusAuthorizedAndNonParticipatingPublishers AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum = "AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS"
)

type AuthorizedSellerStatusAssignedTargetingOptionDetails struct {
	AuthorizedSellerStatus *AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum `json:"authorizedSellerStatus"`
	TargetingOptionID      *string                                                                         `json:"targetingOptionId"`
}
