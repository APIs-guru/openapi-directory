import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListMeta
/** 
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
**/
export class ListMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continue" })
  continue?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceVersion" })
  resourceVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
