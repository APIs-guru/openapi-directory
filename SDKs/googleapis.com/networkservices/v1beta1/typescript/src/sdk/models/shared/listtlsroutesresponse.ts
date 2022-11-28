import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TlsRoute } from "./tlsroute";



// ListTlsRoutesResponse
/** 
 * Response returned by the ListTlsRoutes method.
**/
export class ListTlsRoutesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tlsRoutes", elemType: TlsRoute })
  tlsRoutes?: TlsRoute[];
}
