import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Beacon } from "./beacon";



// ListBeaconsResponse
/** 
 * Response that contains list beacon results and pagination help.
**/
export class ListBeaconsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beacons", elemType: Beacon })
  beacons?: Beacon[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: string;
}
