import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Finding } from "./finding";


// ListFindingsResponse
/** 
 * Response for the `ListFindings` method.
**/
export class ListFindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=findings", elemType: shared.Finding })
  findings?: Finding[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
