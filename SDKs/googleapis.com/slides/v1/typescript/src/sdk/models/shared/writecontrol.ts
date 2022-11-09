import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WriteControl
/** 
 * Provides control over how write requests are executed.
**/
export class WriteControl extends SpeakeasyBase {
  @Metadata({ data: "json, name=requiredRevisionId" })
  requiredRevisionId?: string;
}
