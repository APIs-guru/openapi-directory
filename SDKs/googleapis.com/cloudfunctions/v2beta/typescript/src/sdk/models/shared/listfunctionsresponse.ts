import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Function } from "./function";



// ListFunctionsResponse
/** 
 * Response for the `ListFunctions` method.
**/
export class ListFunctionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=functions", elemType: Function })
  functions?: Function[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
