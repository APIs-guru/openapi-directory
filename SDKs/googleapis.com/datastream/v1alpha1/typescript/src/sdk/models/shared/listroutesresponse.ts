import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";



// ListRoutesResponse
/** 
 * route list response
**/
export class ListRoutesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: Route })
  routes?: Route[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
