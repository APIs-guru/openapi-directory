import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObjectAccessControls
/** 
 * An access-control list.
**/
export class ObjectAccessControls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items" })
  items?: any[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
