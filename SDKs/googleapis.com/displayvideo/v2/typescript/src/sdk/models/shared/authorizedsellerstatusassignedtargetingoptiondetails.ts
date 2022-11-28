import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum {
    AuthorizedSellerStatusUnspecified = "AUTHORIZED_SELLER_STATUS_UNSPECIFIED",
    AuthorizedSellerStatusAuthorizedDirectSellersOnly = "AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY",
    AuthorizedSellerStatusAuthorizedAndNonParticipatingPublishers = "AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS"
}


// AuthorizedSellerStatusAssignedTargetingOptionDetailsInput
/** 
 * Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.
**/
export class AuthorizedSellerStatusAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}


// AuthorizedSellerStatusAssignedTargetingOptionDetails
/** 
 * Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.
**/
export class AuthorizedSellerStatusAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizedSellerStatus" })
  authorizedSellerStatus?: AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
