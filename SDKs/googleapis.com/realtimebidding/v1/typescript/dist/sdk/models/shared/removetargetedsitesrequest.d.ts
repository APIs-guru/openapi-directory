import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to stop targeting sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.
**/
export declare class RemoveTargetedSitesRequest extends SpeakeasyBase {
    sites?: string[];
}
