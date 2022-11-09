import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Level
/** 
 * Level information containing level number and its corresponding name.
**/
export class Level extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=number" })
  number?: number;
}
