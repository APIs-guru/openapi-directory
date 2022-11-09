import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Xss
/** 
 * Information reported for an XSS.
**/
export class Xss extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=stackTraces" })
  stackTraces?: string[];
}
