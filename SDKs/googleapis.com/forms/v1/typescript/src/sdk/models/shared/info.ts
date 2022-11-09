import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Info
/** 
 * The general information for a form.
**/
export class Info extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=documentTitle" })
  documentTitle?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
