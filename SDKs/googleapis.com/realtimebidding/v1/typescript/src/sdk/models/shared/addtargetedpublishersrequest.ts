import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AddTargetedPublishersRequestTargetingModeEnum {
    TargetingModeUnspecified = "TARGETING_MODE_UNSPECIFIED",
    Inclusive = "INCLUSIVE",
    Exclusive = "EXCLUSIVE"
}


// AddTargetedPublishersRequest
/** 
 * A request to start targeting the provided publishers in a specific pretargeting configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting.
**/
export class AddTargetedPublishersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publisherIds" })
  publisherIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=targetingMode" })
  targetingMode?: AddTargetedPublishersRequestTargetingModeEnum;
}
