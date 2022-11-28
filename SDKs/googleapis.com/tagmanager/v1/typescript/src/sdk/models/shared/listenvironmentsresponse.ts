import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";



// ListEnvironmentsResponse
/** 
 * List Environments Response.
**/
export class ListEnvironmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environments", elemType: Environment })
  environments?: Environment[];
}
