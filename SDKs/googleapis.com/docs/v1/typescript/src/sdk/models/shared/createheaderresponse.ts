import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateHeaderResponse
/** 
 * The result of creating a header.
**/
export class CreateHeaderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=headerId" })
  headerId?: string;
}
