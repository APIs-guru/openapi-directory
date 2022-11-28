import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReadWrite
/** 
 * Options for a transaction that can be used to read and write documents.
**/
export class ReadWrite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=retryTransaction" })
  retryTransaction?: string;
}
