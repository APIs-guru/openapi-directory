import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShortcodeNotFound
/** 
 * Shortcode Not Found
**/
export class ShortcodeNotFound extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
