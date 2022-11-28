import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveTargetedPublishersRequest
/** 
 * A request to stop targeting publishers in a specific configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting.
**/
export class RemoveTargetedPublishersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publisherIds" })
  publisherIds?: string[];
}
