import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDataplexV1AssetStatus
/** 
 * Aggregated status of the underlying assets of a lake or zone.
**/
export class GoogleCloudDataplexV1AssetStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeAssets" })
  activeAssets?: number;

  @Metadata({ data: "json, name=securityPolicyApplyingAssets" })
  securityPolicyApplyingAssets?: number;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
