import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Restore } from "./restore";


// ListRestoresResponse
/** 
 * Response message for ListRestores.
**/
export class ListRestoresResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=restores", elemType: shared.Restore })
  restores?: Restore[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
