import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Diagnostics } from "./diagnostics";



// ListDiagnosticsResponse
/** 
 * Response that contains the requested diagnostics.
**/
export class ListDiagnosticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diagnostics", elemType: Diagnostics })
  diagnostics?: Diagnostics[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
