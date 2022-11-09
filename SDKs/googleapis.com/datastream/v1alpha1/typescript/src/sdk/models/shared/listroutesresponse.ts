import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Route } from "./route";


// ListRoutesResponse
/** 
 * route list response
**/
export class ListRoutesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=routes", elemType: shared.Route })
  routes?: Route[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
