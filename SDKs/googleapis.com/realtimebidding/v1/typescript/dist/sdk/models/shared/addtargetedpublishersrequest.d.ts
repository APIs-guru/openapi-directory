import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AddTargetedPublishersRequestTargetingModeEnum {
    TargetingModeUnspecified = "TARGETING_MODE_UNSPECIFIED",
    Inclusive = "INCLUSIVE",
    Exclusive = "EXCLUSIVE"
}
/**
 * A request to start targeting the provided publishers in a specific pretargeting configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting.
**/
export declare class AddTargetedPublishersRequest extends SpeakeasyBase {
    publisherIds?: string[];
    targetingMode?: AddTargetedPublishersRequestTargetingModeEnum;
}
