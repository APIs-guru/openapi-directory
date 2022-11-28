import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1AssetStatus
/** 
 * Aggregated status of the underlying assets of a lake or zone.
**/
export class GoogleCloudDataplexV1AssetStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeAssets" })
  activeAssets?: number;

  @SpeakeasyMetadata({ data: "json, name=securityPolicyApplyingAssets" })
  securityPolicyApplyingAssets?: number;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
