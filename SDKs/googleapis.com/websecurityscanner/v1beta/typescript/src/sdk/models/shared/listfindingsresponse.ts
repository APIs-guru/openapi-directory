import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Finding } from "./finding";



// ListFindingsResponse
/** 
 * Response for the `ListFindings` method.
**/
export class ListFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findings", elemType: Finding })
  findings?: Finding[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
