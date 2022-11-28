import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WriteControl
/** 
 * Provides control over how write requests are executed.
**/
export class WriteControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requiredRevisionId" })
  requiredRevisionId?: string;
}
