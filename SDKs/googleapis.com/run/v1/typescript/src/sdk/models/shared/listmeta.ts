import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListMeta
/** 
 * Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta.
**/
export class ListMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=continue" })
  continue?: string;

  @Metadata({ data: "json, name=resourceVersion" })
  resourceVersion?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
