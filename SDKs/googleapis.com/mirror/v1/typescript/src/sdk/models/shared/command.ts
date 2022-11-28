import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Command
/** 
 * A single menu command that is part of a Contact.
**/
export class Command extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
