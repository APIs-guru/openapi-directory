import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Lake
/** 
 * Represents a Lake resource
**/
export class Lake extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
