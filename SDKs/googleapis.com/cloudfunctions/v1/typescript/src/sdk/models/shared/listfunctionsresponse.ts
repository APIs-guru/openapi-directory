import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudFunction } from "./cloudfunction";


// ListFunctionsResponse
/** 
 * Response for the `ListFunctions` method.
**/
export class ListFunctionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=functions", elemType: shared.CloudFunction })
  functions?: CloudFunction[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
