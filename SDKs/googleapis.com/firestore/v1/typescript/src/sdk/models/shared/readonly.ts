import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReadOnly
/** 
 * Options for a transaction that can only be used to read documents.
**/
export class ReadOnly extends SpeakeasyBase {
  @Metadata({ data: "json, name=readTime" })
  readTime?: string;
}
