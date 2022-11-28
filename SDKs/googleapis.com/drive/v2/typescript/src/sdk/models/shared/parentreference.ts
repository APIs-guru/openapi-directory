import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParentReference
/** 
 * A reference to a file's parent.
**/
export class ParentReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isRoot" })
  isRoot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=parentLink" })
  parentLink?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
