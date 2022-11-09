import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MailOptions
/** 
 * Additional options for Gmail search
**/
export class MailOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludeDrafts" })
  excludeDrafts?: boolean;
}
