import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Federation } from "./federation";


// ListFederationsResponse
/** 
 * Response message for ListFederations
**/
export class ListFederationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=federations", elemType: shared.Federation })
  federations?: Federation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
