import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MultiRegional
/** 
 * Area contains multiple locations.
**/
export class MultiRegional extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
