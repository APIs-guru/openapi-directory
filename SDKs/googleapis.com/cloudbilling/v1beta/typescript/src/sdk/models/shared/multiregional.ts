import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MultiRegional
/** 
 * Area contains multiple locations.
**/
export class MultiRegional extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
