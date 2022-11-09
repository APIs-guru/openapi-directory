import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Drive } from "./drive";


// DriveList
/** 
 * A list of shared drives.
**/
export class DriveList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Drive })
  items?: Drive[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
