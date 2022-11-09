import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReadOnly
/** 
 * Options specific to read-only transactions.
**/
export class ReadOnly extends SpeakeasyBase {
  @Metadata({ data: "json, name=readTime" })
  readTime?: string;
}
