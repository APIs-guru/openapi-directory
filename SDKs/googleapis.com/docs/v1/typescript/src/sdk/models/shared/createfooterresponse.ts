import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateFooterResponse
/** 
 * The result of creating a footer.
**/
export class CreateFooterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=footerId" })
  footerId?: string;
}
