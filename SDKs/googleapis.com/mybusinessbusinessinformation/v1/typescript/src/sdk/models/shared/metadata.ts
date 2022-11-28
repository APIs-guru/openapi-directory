import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Metadata
/** 
 * Additional non-user-editable information about the location.
**/
export class Metadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canDelete" })
  canDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canHaveBusinessCalls" })
  canHaveBusinessCalls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canHaveFoodMenus" })
  canHaveFoodMenus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canModifyServiceList" })
  canModifyServiceList?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canOperateHealthData" })
  canOperateHealthData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canOperateLocalPost" })
  canOperateLocalPost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canOperateLodgingData" })
  canOperateLodgingData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=duplicateLocation" })
  duplicateLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=hasGoogleUpdated" })
  hasGoogleUpdated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasPendingEdits" })
  hasPendingEdits?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasVoiceOfMerchant" })
  hasVoiceOfMerchant?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mapsUri" })
  mapsUri?: string;

  @SpeakeasyMetadata({ data: "json, name=newReviewUri" })
  newReviewUri?: string;

  @SpeakeasyMetadata({ data: "json, name=placeId" })
  placeId?: string;
}
