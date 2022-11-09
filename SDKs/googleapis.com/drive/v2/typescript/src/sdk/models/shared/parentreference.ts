import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ParentReference
/** 
 * A reference to a file's parent.
**/
export class ParentReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isRoot" })
  isRoot?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=parentLink" })
  parentLink?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
