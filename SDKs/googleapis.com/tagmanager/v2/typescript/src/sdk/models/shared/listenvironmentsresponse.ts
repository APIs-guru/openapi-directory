import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Environment } from "./environment";


// ListEnvironmentsResponse
/** 
 * List Environments Response.
**/
export class ListEnvironmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment", elemType: shared.Environment })
  environment?: Environment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
