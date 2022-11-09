import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Links
/** 
 * Links relevant to the payload
**/
export class Links extends SpeakeasyBase {
  @Metadata({ data: "json, name=First" })
  first?: string;

  @Metadata({ data: "json, name=Last" })
  last?: string;

  @Metadata({ data: "json, name=Next" })
  next?: string;

  @Metadata({ data: "json, name=Prev" })
  prev?: string;

  @Metadata({ data: "json, name=Self" })
  self: string;
}
