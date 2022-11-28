import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Links
/** 
 * Links relevant to the payload
**/
export class Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=First" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=Last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=Next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=Prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=Self" })
  self: string;
}
