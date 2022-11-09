import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveTargetedPublishersRequest
/** 
 * A request to stop targeting publishers in a specific configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting.
**/
export class RemoveTargetedPublishersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=publisherIds" })
  publisherIds?: string[];
}
