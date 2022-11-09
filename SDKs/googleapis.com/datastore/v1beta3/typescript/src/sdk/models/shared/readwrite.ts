import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReadWrite
/** 
 * Options specific to read / write transactions.
**/
export class ReadWrite extends SpeakeasyBase {
  @Metadata({ data: "json, name=previousTransaction" })
  previousTransaction?: string;
}
