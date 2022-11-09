import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AddTargetedSitesRequestTargetingModeEnum {
    TargetingModeUnspecified = "TARGETING_MODE_UNSPECIFIED"
,    Inclusive = "INCLUSIVE"
,    Exclusive = "EXCLUSIVE"
}


// AddTargetedSitesRequest
/** 
 * A request to start targeting the provided sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.
**/
export class AddTargetedSitesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=sites" })
  sites?: string[];

  @Metadata({ data: "json, name=targetingMode" })
  targetingMode?: AddTargetedSitesRequestTargetingModeEnum;
}
