import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LocationStateInput
/** 
 * Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)
**/
export class LocationStateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canDelete" })
  canDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canUpdate" })
  canUpdate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasPendingEdits" })
  hasPendingEdits?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasPendingVerification" })
  hasPendingVerification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isDisabled" })
  isDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isDisconnected" })
  isDisconnected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isDuplicate" })
  isDuplicate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isGoogleUpdated" })
  isGoogleUpdated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isLocalPostApiDisabled" })
  isLocalPostApiDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPendingReview" })
  isPendingReview?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPublished" })
  isPublished?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSuspended" })
  isSuspended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isVerified" })
  isVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=needsReverification" })
  needsReverification?: boolean;
}


// LocationState
/** 
 * Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)
**/
export class LocationState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canDelete" })
  canDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canHaveFoodMenus" })
  canHaveFoodMenus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canModifyServiceList" })
  canModifyServiceList?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canOperateHealthData" })
  canOperateHealthData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canOperateLodgingData" })
  canOperateLodgingData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canUpdate" })
  canUpdate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasPendingEdits" })
  hasPendingEdits?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasPendingVerification" })
  hasPendingVerification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isDisabled" })
  isDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isDisconnected" })
  isDisconnected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isDuplicate" })
  isDuplicate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isGoogleUpdated" })
  isGoogleUpdated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isLocalPostApiDisabled" })
  isLocalPostApiDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPendingReview" })
  isPendingReview?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPublished" })
  isPublished?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSuspended" })
  isSuspended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isVerified" })
  isVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=needsReverification" })
  needsReverification?: boolean;
}
