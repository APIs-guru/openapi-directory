import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CmTrackingAd
/** 
 * A Campaign Manager 360 tracking ad.
**/
export class CmTrackingAd extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cmAdId" })
  cmAdId?: string;

  @SpeakeasyMetadata({ data: "json, name=cmCreativeId" })
  cmCreativeId?: string;

  @SpeakeasyMetadata({ data: "json, name=cmPlacementId" })
  cmPlacementId?: string;
}
