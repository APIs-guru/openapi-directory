import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Command
/** 
 * A single menu command that is part of a Contact.
**/
export class Command extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;
}
