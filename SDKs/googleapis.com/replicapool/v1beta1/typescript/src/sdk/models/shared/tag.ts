import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource.
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=fingerPrint" })
  fingerPrint?: string;

  @Metadata({ data: "json, name=items" })
  items?: string[];
}
