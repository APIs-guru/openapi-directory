import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HttpRoute } from "./httproute";


// ListHttpRoutesResponse
/** 
 * Response returned by the ListHttpRoutes method.
**/
export class ListHttpRoutesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpRoutes", elemType: shared.HttpRoute })
  httpRoutes?: HttpRoute[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
