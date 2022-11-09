import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventLink
/** 
 * A link to this audit event object if you were to retrieve it individually.
**/
export class EventLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: any;
}
