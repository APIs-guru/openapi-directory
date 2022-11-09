import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Scan } from "./scan";


// ListScansResponse
/** 
 * Response method from the ListScans method.
**/
export class ListScansResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=scans", elemType: shared.Scan })
  scans?: Scan[];
}
