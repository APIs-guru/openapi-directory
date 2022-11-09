import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TlsRoute } from "./tlsroute";


// ListTlsRoutesResponse
/** 
 * Response returned by the ListTlsRoutes method.
**/
export class ListTlsRoutesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tlsRoutes", elemType: shared.TlsRoute })
  tlsRoutes?: TlsRoute[];
}
