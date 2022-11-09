import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Beacon } from "./beacon";


// ListBeaconsResponse
/** 
 * Response that contains list beacon results and pagination help.
**/
export class ListBeaconsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=beacons", elemType: shared.Beacon })
  beacons?: Beacon[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: string;
}
