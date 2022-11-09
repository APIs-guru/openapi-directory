import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReadWrite
/** 
 * Options for a transaction that can be used to read and write documents.
**/
export class ReadWrite extends SpeakeasyBase {
  @Metadata({ data: "json, name=retryTransaction" })
  retryTransaction?: string;
}
