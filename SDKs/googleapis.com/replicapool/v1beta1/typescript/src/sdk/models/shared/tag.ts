import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 * A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource.
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fingerPrint" })
  fingerPrint?: string;

  @SpeakeasyMetadata({ data: "json, name=items" })
  items?: string[];
}
