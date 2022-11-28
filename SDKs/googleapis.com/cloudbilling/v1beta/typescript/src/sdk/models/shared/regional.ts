import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Regional
/** 
 * Area contains only one location.
**/
export class Regional extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
