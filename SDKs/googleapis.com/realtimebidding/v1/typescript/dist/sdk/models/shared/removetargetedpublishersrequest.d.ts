import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to stop targeting publishers in a specific configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting.
**/
export declare class RemoveTargetedPublishersRequest extends SpeakeasyBase {
    publisherIds?: string[];
}
