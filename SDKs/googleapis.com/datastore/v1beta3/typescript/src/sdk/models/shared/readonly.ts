import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReadOnly
/** 
 * Options specific to read-only transactions.
**/
export class ReadOnly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;
}
