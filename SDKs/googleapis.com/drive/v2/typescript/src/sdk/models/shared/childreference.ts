import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChildReference
/** 
 * A reference to a folder's child.
**/
export class ChildReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childLink" })
  childLink?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
