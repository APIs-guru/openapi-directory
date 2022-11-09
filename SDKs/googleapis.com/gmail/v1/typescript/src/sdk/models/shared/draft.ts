import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Message } from "./message";


// Draft
/** 
 * A draft email in the user's mailbox.
**/
export class Draft extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=message" })
  message?: Message;
}
