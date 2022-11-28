import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Xss
/** 
 * Information reported for an XSS.
**/
export class Xss extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=stackTraces" })
  stackTraces?: string[];
}
