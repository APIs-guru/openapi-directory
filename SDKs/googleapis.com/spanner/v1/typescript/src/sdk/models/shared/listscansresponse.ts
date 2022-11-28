import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Scan } from "./scan";



// ListScansResponse
/** 
 * Response method from the ListScans method.
**/
export class ListScansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=scans", elemType: Scan })
  scans?: Scan[];
}
