import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListMeta
/** 
 * Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta.
**/
export class ListMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continue" })
  continue?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceVersion" })
  resourceVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
