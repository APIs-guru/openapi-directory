import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateFooterResponse
/** 
 * The result of creating a footer.
**/
export class CreateFooterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=footerId" })
  footerId?: string;
}
