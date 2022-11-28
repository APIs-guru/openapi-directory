import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReadOnly
/** 
 * Options for a transaction that can only be used to read documents.
**/
export class ReadOnly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;
}
