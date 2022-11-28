import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateHeaderResponse
/** 
 * The result of creating a header.
**/
export class CreateHeaderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headerId" })
  headerId?: string;
}
