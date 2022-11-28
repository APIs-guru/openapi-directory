import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MailOptions
/** 
 * Additional options for Gmail search
**/
export class MailOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludeDrafts" })
  excludeDrafts?: boolean;
}
