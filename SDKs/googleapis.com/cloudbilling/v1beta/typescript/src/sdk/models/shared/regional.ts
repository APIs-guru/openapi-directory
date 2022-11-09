import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Regional
/** 
 * Area contains only one location.
**/
export class Regional extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
