import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpRoute } from "./httproute";



// ListHttpRoutesResponse
/** 
 * Response returned by the ListHttpRoutes method.
**/
export class ListHttpRoutesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpRoutes", elemType: HttpRoute })
  httpRoutes?: HttpRoute[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
