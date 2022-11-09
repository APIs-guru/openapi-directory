import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LocationState
/** 
 * Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)
**/
export class LocationState extends SpeakeasyBase {
  @Metadata({ data: "json, name=canDelete" })
  canDelete?: boolean;

  @Metadata({ data: "json, name=canHaveFoodMenus" })
  canHaveFoodMenus?: boolean;

  @Metadata({ data: "json, name=canModifyServiceList" })
  canModifyServiceList?: boolean;

  @Metadata({ data: "json, name=canOperateHealthData" })
  canOperateHealthData?: boolean;

  @Metadata({ data: "json, name=canOperateLodgingData" })
  canOperateLodgingData?: boolean;

  @Metadata({ data: "json, name=canUpdate" })
  canUpdate?: boolean;

  @Metadata({ data: "json, name=hasPendingEdits" })
  hasPendingEdits?: boolean;

  @Metadata({ data: "json, name=hasPendingVerification" })
  hasPendingVerification?: boolean;

  @Metadata({ data: "json, name=isDisabled" })
  isDisabled?: boolean;

  @Metadata({ data: "json, name=isDisconnected" })
  isDisconnected?: boolean;

  @Metadata({ data: "json, name=isDuplicate" })
  isDuplicate?: boolean;

  @Metadata({ data: "json, name=isGoogleUpdated" })
  isGoogleUpdated?: boolean;

  @Metadata({ data: "json, name=isLocalPostApiDisabled" })
  isLocalPostApiDisabled?: boolean;

  @Metadata({ data: "json, name=isPendingReview" })
  isPendingReview?: boolean;

  @Metadata({ data: "json, name=isPublished" })
  isPublished?: boolean;

  @Metadata({ data: "json, name=isSuspended" })
  isSuspended?: boolean;

  @Metadata({ data: "json, name=isVerified" })
  isVerified?: boolean;

  @Metadata({ data: "json, name=needsReverification" })
  needsReverification?: boolean;
}
