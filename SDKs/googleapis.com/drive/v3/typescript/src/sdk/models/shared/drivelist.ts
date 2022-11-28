import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Drive } from "./drive";



// DriveList
/** 
 * A list of shared drives.
**/
export class DriveList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=drives", elemType: Drive })
  drives?: Drive[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
