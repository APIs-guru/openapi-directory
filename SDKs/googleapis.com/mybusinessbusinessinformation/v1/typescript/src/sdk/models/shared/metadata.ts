import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Metadata
/** 
 * Additional non-user-editable information about the location.
**/
export class Metadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=canDelete" })
  canDelete?: boolean;

  @Metadata({ data: "json, name=canHaveBusinessCalls" })
  canHaveBusinessCalls?: boolean;

  @Metadata({ data: "json, name=canHaveFoodMenus" })
  canHaveFoodMenus?: boolean;

  @Metadata({ data: "json, name=canModifyServiceList" })
  canModifyServiceList?: boolean;

  @Metadata({ data: "json, name=canOperateHealthData" })
  canOperateHealthData?: boolean;

  @Metadata({ data: "json, name=canOperateLocalPost" })
  canOperateLocalPost?: boolean;

  @Metadata({ data: "json, name=canOperateLodgingData" })
  canOperateLodgingData?: boolean;

  @Metadata({ data: "json, name=duplicateLocation" })
  duplicateLocation?: string;

  @Metadata({ data: "json, name=hasGoogleUpdated" })
  hasGoogleUpdated?: boolean;

  @Metadata({ data: "json, name=hasPendingEdits" })
  hasPendingEdits?: boolean;

  @Metadata({ data: "json, name=hasVoiceOfMerchant" })
  hasVoiceOfMerchant?: boolean;

  @Metadata({ data: "json, name=mapsUri" })
  mapsUri?: string;

  @Metadata({ data: "json, name=newReviewUri" })
  newReviewUri?: string;

  @Metadata({ data: "json, name=placeId" })
  placeId?: string;
}
