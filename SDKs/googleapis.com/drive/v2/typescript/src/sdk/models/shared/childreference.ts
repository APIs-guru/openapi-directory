import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChildReference
/** 
 * A reference to a folder's child.
**/
export class ChildReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=childLink" })
  childLink?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
