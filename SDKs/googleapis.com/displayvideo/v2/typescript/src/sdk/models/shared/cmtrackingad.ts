import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CmTrackingAd
/** 
 * A Campaign Manager 360 tracking ad.
**/
export class CmTrackingAd extends SpeakeasyBase {
  @Metadata({ data: "json, name=cmAdId" })
  cmAdId?: string;

  @Metadata({ data: "json, name=cmCreativeId" })
  cmCreativeId?: string;

  @Metadata({ data: "json, name=cmPlacementId" })
  cmPlacementId?: string;
}
