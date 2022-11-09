import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DualRegional
/** 
 * Area contains dual locations.
**/
export class DualRegional extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
