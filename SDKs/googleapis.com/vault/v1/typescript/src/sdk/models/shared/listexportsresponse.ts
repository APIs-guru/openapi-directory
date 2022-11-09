import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Export } from "./export";


// ListExportsResponse
/** 
 * The exports for a matter.
**/
export class ListExportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=exports", elemType: shared.Export })
  exports?: Export[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
