import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventLink
/** 
 * A link to this audit event object if you were to retrieve it individually.
**/
export class EventLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: any;
}
