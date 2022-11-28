import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Level
/** 
 * Level information containing level number and its corresponding name.
**/
export class Level extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;
}
