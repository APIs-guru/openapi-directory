import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DualRegional
/** 
 * Area contains dual locations.
**/
export class DualRegional extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
