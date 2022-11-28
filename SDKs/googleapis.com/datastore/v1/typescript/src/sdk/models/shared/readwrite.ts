import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReadWrite
/** 
 * Options specific to read / write transactions.
**/
export class ReadWrite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=previousTransaction" })
  previousTransaction?: string;
}
