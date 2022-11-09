import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListMeta
/** 
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
**/
export class ListMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=continue" })
  continue?: string;

  @Metadata({ data: "json, name=resourceVersion" })
  resourceVersion?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
