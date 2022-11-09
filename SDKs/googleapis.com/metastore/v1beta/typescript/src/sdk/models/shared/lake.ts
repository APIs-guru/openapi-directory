import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Lake
/** 
 * Represents a Lake resource
**/
export class Lake extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
