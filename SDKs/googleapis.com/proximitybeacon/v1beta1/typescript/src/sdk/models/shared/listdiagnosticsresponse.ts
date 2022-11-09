import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Diagnostics } from "./diagnostics";


// ListDiagnosticsResponse
/** 
 * Response that contains the requested diagnostics.
**/
export class ListDiagnosticsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=diagnostics", elemType: shared.Diagnostics })
  diagnostics?: Diagnostics[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
