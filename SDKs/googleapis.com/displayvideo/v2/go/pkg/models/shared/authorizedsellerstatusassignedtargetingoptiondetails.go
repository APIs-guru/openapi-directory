package shared

type AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum string

const (
	AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnumAuthorizedSellerStatusUnspecified                             AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum = "AUTHORIZED_SELLER_STATUS_UNSPECIFIED"
	AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnumAuthorizedSellerStatusAuthorizedDirectSellersOnly             AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum = "AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY"
	AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnumAuthorizedSellerStatusAuthorizedAndNonParticipatingPublishers AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum = "AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS"
)

// AuthorizedSellerStatusAssignedTargetingOptionDetailsInput
// Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.
type AuthorizedSellerStatusAssignedTargetingOptionDetailsInput struct {
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}

// AuthorizedSellerStatusAssignedTargetingOptionDetails
// Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.
type AuthorizedSellerStatusAssignedTargetingOptionDetails struct {
	AuthorizedSellerStatus *AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum `json:"authorizedSellerStatus,omitempty"`
	TargetingOptionID      *string                                                                         `json:"targetingOptionId,omitempty"`
}
