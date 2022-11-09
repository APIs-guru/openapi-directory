import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BulkMuteFindingsRequest
/** 
 * Request message for bulk findings update. Note: 1. If multiple bulk update requests match the same resource, the order in which they get executed is not defined. 2. Once a bulk operation is started, there is no way to stop it.
**/
export class BulkMuteFindingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=muteAnnotation" })
  muteAnnotation?: string;
}
