import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AuthorizedSellerStatusTargetingOptionDetailsAuthorizedSellerStatusEnum {
    AuthorizedSellerStatusUnspecified = "AUTHORIZED_SELLER_STATUS_UNSPECIFIED"
,    AuthorizedSellerStatusAuthorizedDirectSellersOnly = "AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY"
,    AuthorizedSellerStatusAuthorizedAndNonParticipatingPublishers = "AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS"
}


// AuthorizedSellerStatusTargetingOptionDetails
/** 
 * Represents a targetable authorized seller status. This will be populated in the authorized_seller_status_details field when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.
**/
export class AuthorizedSellerStatusTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizedSellerStatus" })
  authorizedSellerStatus?: AuthorizedSellerStatusTargetingOptionDetailsAuthorizedSellerStatusEnum;
}
