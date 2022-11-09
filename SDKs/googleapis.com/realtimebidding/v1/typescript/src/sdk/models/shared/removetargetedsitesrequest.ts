import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveTargetedSitesRequest
/** 
 * A request to stop targeting sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.
**/
export class RemoveTargetedSitesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=sites" })
  sites?: string[];
}
