import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Name
/** 
 * A person's name.
**/
export class Name extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
