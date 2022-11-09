import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Environment } from "./environment";


// ListEnvironmentsResponse
/** 
 * List Environments Response.
**/
export class ListEnvironmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=environments", elemType: shared.Environment })
  environments?: Environment[];
}
