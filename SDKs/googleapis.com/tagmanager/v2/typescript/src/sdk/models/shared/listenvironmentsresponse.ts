import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";



// ListEnvironmentsResponse
/** 
 * List Environments Response.
**/
export class ListEnvironmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment", elemType: Environment })
  environment?: Environment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
