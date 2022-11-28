import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum {
    AuthorizedSellerStatusUnspecified = "AUTHORIZED_SELLER_STATUS_UNSPECIFIED",
    AuthorizedSellerStatusAuthorizedDirectSellersOnly = "AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY",
    AuthorizedSellerStatusAuthorizedAndNonParticipatingPublishers = "AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS"
}
/**
 * Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.
**/
export declare class AuthorizedSellerStatusAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    targetingOptionId?: string;
}
/**
 * Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.
**/
export declare class AuthorizedSellerStatusAssignedTargetingOptionDetails extends SpeakeasyBase {
    authorizedSellerStatus?: AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum;
    targetingOptionId?: string;
}
