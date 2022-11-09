import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectAccessControls
/** 
 * An access-control list.
**/
export class ObjectAccessControls extends SpeakeasyBase {
  @Metadata({ data: "json, name=items" })
  items?: any[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
