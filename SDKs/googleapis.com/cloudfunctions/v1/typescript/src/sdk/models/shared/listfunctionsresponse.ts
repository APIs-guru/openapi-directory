import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudFunction } from "./cloudfunction";



// ListFunctionsResponse
/** 
 * Response for the `ListFunctions` method.
**/
export class ListFunctionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=functions", elemType: CloudFunction })
  functions?: CloudFunction[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
