import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveTargetedSitesRequest
/** 
 * A request to stop targeting sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.
**/
export class RemoveTargetedSitesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sites" })
  sites?: string[];
}
